----------

# Secure Flight Search and Booking System

## Demo

You can view a live demo of the project at: [Demo Link](https://skyroutes-app.onrender.com/)

You can sign up or use the provided credentials to explore the system:

-   **Admin**
    
    -   Email: `admin@gmail.com`
    -   Password: `password123`
-   **User**
    
    -   Email: `user@gmail.com`
    -   Password: `password123`

## Overview

This project is a **secure flight search and booking system** built using the MERN stack (MongoDB, Express, React, Node.js). SCSS is utilized for advanced styling, and JWT is implemented for secure authentication.

## Technical Stack

### Frontend

-   **React**: A JavaScript library for building dynamic and responsive user interfaces, chosen for its component-based architecture and reusability.
-   **SCSS**: Provides advanced styling features like variables and nesting, enhancing the visual aspects of the application.

### Backend

-   **Node.js**: JavaScript runtime for building scalable server-side applications, selected for its rich ecosystem of libraries and modules available through npm.
-   **Express**: A web framework for Node.js that facilitates easy integration with middleware and databases.
-   **MongoDB**: A NoSQL database used for storing flight and booking data, offering flexibility in data storage and scalability.

### Authentication & Security

-   **JWT (JSON Web Tokens)**: Used for secure user authentication and authorization.
-   **bcrypt**: Handles password hashing and secure management of user credentials.
-   **CORS**: Configured to handle cross-origin requests securely.

## Setup Instructions

### Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   [MongoDB](https://www.mongodb.com/) (Local or Cloud instance)

### Installation

1.  **Clone the Repository**
    
    bash
    

    
    `git clone [repository link]
    cd [repository directory]` 
    
2.  **Install Dependencies**
    
    -   **For Frontend**:
        
        bash
        
        `cd frontend
        npm install` 
        
    -   **For Backend**:
        
        bash

        
        `cd backend
        npm install` 
        
3.  **Configuration**
    
    Create a `.env` file in the backend directory and configure the required environment variables.
    
4.  **Run the Application**
    
    -   **Start the backend server**:
        
        bash
        

        
        `cd backend
        npm start` 
        
    -   **Start the frontend application**:
        
        bash
       
        `cd frontend
        npm start` 
        
## Assumptions Made

-   Mock flight data is used for demonstration purposes.
-   Basic role-based access control is implemented.
-   Apply secure user authentication and authorization.
-   Passwords are securely encrypted and decrypted.
-   Form inputs are validated.
-  Website is responsive.
- Styling UI using BEM(Block Element Modifier) system.
- Database contains Flights, Users and Booking information.


## Additional Notes

The application is designed with security and scalability in mind. Further enhancements may be needed based on specific requirements.

----------

