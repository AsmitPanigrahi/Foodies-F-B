# Foodies - Food Delivery Application

## Overview
Foodies is a full-stack food delivery application that allows users to browse, order, and manage food deliveries seamlessly. Built with modern web technologies, this application provides a responsive and user-friendly interface.

## Tech Stack
- **Frontend:** 
  - React
  - React Router
  - Tailwind CSS
  - Axios
  - Testing Libraries (React Testing Library, Jest)

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JSON Web Tokens (JWT)
  - Cloudinary
  - bcryptjs
  - Helmet
  - XSS Clean
  - Multer

## Features
- User authentication with secure JWT tokens.
- Media management using Cloudinary for efficient image handling.
- Responsive design for optimal viewing on all devices.
- Secure API endpoints with Express and Helmet.
- Integration with MongoDB for data storage and retrieval.
- User-friendly interface with Tailwind CSS for styling.

## Installation

### Prerequisites
- Node.js (>= 18.0.0)
- MongoDB (for backend)

### Clone the Repository
```bash
git clone https://github.com/yourusername/foodies.git
cd foodies
```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd ../Foodies
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory and add your environment variables (e.g., MongoDB URI, Cloudinary credentials).

### Running the Application
1. Start the backend server:
   ```bash
   npm run dev
   ```
2. Start the frontend application:
   ```bash
   cd frontend
   npm start
   ```

## Usage
- Access the application in your browser at `http://localhost:3000`.
- Register or log in to start ordering food.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to the open-source community for providing the tools and libraries that made this project possible.
