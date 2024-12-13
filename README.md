# Foodies - Food Delivery Application

## Overview
Foodies is a full-stack food delivery application that allows users to browse, order, and manage food deliveries seamlessly. Built with modern web technologies, this application provides a responsive and user-friendly interface.

## Tech Stack
- **Frontend:**
  - React: A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.
  - React Router: A library for routing and navigation within the application, enabling single-page application (SPA) behavior.
  - Axios: A promise-based HTTP client for making requests to the backend API.
  - React Hot Toast: A library for displaying notifications and alerts in the application.
  - React Icons: A library for incorporating a wide range of icons in your components.
  - Tailwind CSS: A utility-first CSS framework for quickly styling the application with predefined classes.
  - @testing-library/react: A library for testing React components, ensuring they behave as expected.
  - @testing-library/jest-dom: Provides custom matchers for Jest, enhancing the testing capabilities for DOM nodes.
  - PostCSS: A tool for transforming CSS with JavaScript plugins, enabling features like autoprefixing and future CSS syntax.
  - Autoprefixer: A PostCSS plugin that adds vendor prefixes to CSS rules, ensuring compatibility across different browsers.
  - @babel/plugin-proposal-private-property-in-object: A Babel plugin that supports the use of private properties in objects, enabling modern JavaScript features.

- **Backend:**
  - Express: A web application framework for Node.js, providing a robust set of features for building web and mobile applications.
  - Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js, providing a straightforward way to model application data.
  - MongoDB: A NoSQL database used for storing application data, offering flexibility and scalability.
  - jsonwebtoken: A library for creating and verifying JSON Web Tokens (JWT), used for secure user authentication.
  - Cloudinary: A cloud-based service for managing and storing media files, offering features like image optimization and transformation.
  - Helmet: A middleware that helps secure Express apps by setting various HTTP headers, protecting against common web vulnerabilities.
  - xss-clean: Middleware to sanitize user input and prevent cross-site scripting (XSS) attacks.
  - express-rate-limit: Middleware for basic rate-limiting, protecting the application from brute-force attacks.
  - cors: Middleware to enable Cross-Origin Resource Sharing, allowing the frontend to communicate with the backend.
  - bcryptjs: A library for hashing and securing passwords, ensuring user credentials are stored securely.
  - dotenv: A module for loading environment variables from a `.env` file, keeping sensitive configuration out of the codebase.
  - morgan: HTTP request logger middleware, providing detailed logs of incoming requests for debugging and monitoring.
  - multer: Middleware for handling file uploads, enabling users to upload images and other files.
  - compression: Middleware to compress response bodies, improving the performance of the application.
  - nodemon: A development tool that automatically restarts the server when file changes are detected, enhancing the development workflow.

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
