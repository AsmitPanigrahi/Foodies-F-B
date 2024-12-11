const fs = require('fs');
const path = require('path');
const AppError = require('./appError');
const { cloudinary, localUpload } = require('../config/cloudinary');

const uploadImage = async (file) => {
    try {
        // Save image to local storage
        const localFilePath = path.join(__dirname, '../uploads', file.filename);
        await localUpload.single('image')(file);

        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(localFilePath, {
            folder: 'foodies',
            use_filename: true,
            unique_filename: true
        });

        // Delete local file
        fs.unlinkSync(localFilePath);

        return result.secure_url;
    } catch (error) {
        throw new AppError('Error uploading image to Cloudinary', 500);
    }
};

const deleteImage = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.error('Error deleting image from Cloudinary:', error);
    }
};

module.exports = {
    uploadImage,
    deleteImage
};
