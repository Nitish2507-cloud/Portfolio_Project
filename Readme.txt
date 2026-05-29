# Portfolio Website

## Overview

This is a modern Full Stack Portfolio Website developed using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. The portfolio showcases personal information, technical skills, projects, and a contact form that allows visitors to send messages directly to the backend server.

## Features

* Responsive modern UI
* Professional portfolio homepage
* About Me section
* Projects showcase section
* Skills section
* Contact form with backend integration
* Resume download option
* Mobile-friendly design
* Built using MERN technologies

## Technologies Used

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv

## Project Structure

Portfolio_Project/

├── Frontend/

│   ├── public/

│   ├── src/

│   ├── package.json

│   └── ...

│

├── Backend/

│   ├── models/

│   ├── index.js

│   ├── package.json

│   └── ...

│

└── README.md

## Installation and Setup

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* MongoDB

### Frontend Setup

1. Open terminal
2. Navigate to frontend folder

cd Frontend

3. Install dependencies

npm install

4. Start frontend

npm run dev

Frontend will run on:

http://localhost:5173

### Backend Setup

1. Open terminal
2. Navigate to backend folder

cd Backend

3. Install dependencies

npm install

4. Create a .env file

Example:

PORT=5000

MONGODB_URI=your_mongodb_connection_string

5. Start backend server

node index.js

Backend will run on:

http://localhost:5000

## Contact Form

The contact form sends user details to the backend server where they can be processed and stored in MongoDB.

Fields:

* Name
* Email
* Message

## Author

Nitish

Full Stack Developer

## Future Enhancements

* Authentication system
* Project live demo integration
* Email notifications
* Admin dashboard
* Deployment on cloud platforms

## License

This project is developed for educational and portfolio purposes.
