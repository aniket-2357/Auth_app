Auth_app



Welcome to the Project Name! This web application is built using React, Firebase, and Bootstrap. It includes features such as user authentication, an analog clock, a slider for controlling the clock's speed, and a shareable URL for specific configurations.

Table of Contents

Features

Prerequisites

Installation

Configuration

Running the Application

Project Structure



Features

User authentication using email/password and Google Sign-In

Sign-up and login forms with Bootstrap styling

Post-login screen with:

  An analog clock running anticlockwise

  A slider to control the clock's speed

  A share button to generate a unique URL

Dynamic quote display with quotes changing every 5 seconds

Responsive design

Prerequisites

Before you begin, ensure you have the following installed on your system:



  npm (usually comes with Node.js)
  
  Firebase CLI

Installation

Clone the repository:


sh

Copy code

git clone https://github.com/yourusername/your-repo-name.git

cd your-repo-name

Install dependencies:


sh

Copy code

npm install

Configuration

Firebase Setup:




Create a Firebase project in the Firebase Console.

  Enable Authentication and Firestore in the Firebase Console.

  Generate a Firebase config object from the Firebase project settings.
  Environment Variables:


Create a .env file in the root directory and add your Firebase configuration:

sh

Copy code

REACT_APP_FIREBASE_API_KEY=your-api-key

REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain

REACT_APP_FIREBASE_PROJECT_ID=your-project-id

REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket

REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id

REACT_APP_FIREBASE_APP_ID=your-app-id

REACT_APP_API_NINJAS_KEY=your-api-ninjas-key

Running the Application

Start the development server:


sh

Copy code

npm start

The application will be available at http://localhost:3000.



