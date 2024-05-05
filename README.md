# INFINITY-SPACE

Welcome to Space Explorer! This project leverages NASA's APIs to let users explore data related to space. The application provides information from NASA's Near-Earth Object Web Service (NEOWS), Astronomy Picture of the Day (APOD), Earth Observatory Natural Event Tracker (EONET), and NASA's image library API. It is built with React using Vite for the frontend, and Node.js with Express and MongoDB for the backend. The application also uses Tailwind CSS as its CSS framework and includes login and sign-up functionality.'

Hosted in->https://infinity-space-1.onrender.com/

## Table of Contents

- [INFINITY-SPACE](#infinity-space)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [1. Clone the repository:](#1-clone-the-repository)
    - [2. Install dependencies:](#2-install-dependencies)
    - [3. Set up environment variables:](#3-set-up-environment-variables)
    - [4. Start the application:](#4-start-the-application)
  - [Usage](#usage)
    - [API Endpoints](#api-endpoints)
    - [User Authentication:](#user-authentication)
      - [NASA APIs:](#nasa-apis)
  - [Technologies Used](#technologies-used)
    - [Frontend:](#frontend)
    - [Backend:](#backend)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

Space Explorer allows users to explore space data using NASA's APIs. Users can view data related to near-Earth objects, the Astronomy Picture of the Day, natural events on Earth, and images from NASA's image library. The application also provides login and sign-up functionality for user authentication.

## Prerequisites

Before setting up the project, ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (for the backend)
- [Git](https://git-scm.com/) (to clone the repository)

## Installation

Follow these steps to set up the project:

### 1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install dependencies:
Frontend:

```bash
cd frontend
npm install
```

Backend:
```bash
cd backend
npm install
```

### 3. Set up environment variables:
In the backend directory, create a .env file and set the required environment variables such as the MongoDB connection string, and any API keys needed for NASA's APIs.
Example .env file:

MONGO_URI=<your-mongodb-uri>
API_KEY_NASA=<your-nasa-api-key>
PORT=<PORT-NUMBER>
SECRET=<JWT-SCERET-KEY>

### 4. Start the application:

Backend:

```bash
cd backend
npm start
```

Frontend:

```bash
Copy code
cd frontend
npm run dev
```
This starts the backend server on http://localhost:<PORT> and the frontend application on http://localhost:5173.

## Usage
Once the application is running, you can navigate to the following routes:

/ for the home page.
/apod for the Astronomy Picture of the Day.
/neow for near-Earth objects data.
/events for natural events on Earth.
/libraries for NASA's image library.
/login for the login page.
/signup for the sign-up page.

### API Endpoints
The backend API provides endpoints for the following functionalities:

### User Authentication: 
Sign up, login, and logout.

#### NASA APIs: 
Routes for fetching data from NASA's APIs (NEOWS, APOD, EONET, and image library).

## Technologies Used
### Frontend:
React with Vite
Tailwind CSS
### Backend:
Node.js with Express
MongoDB
NASA APIs (NEOWS, APOD, EONET, and image library)

## Contributing
Contributions are welcome! Please open an issue or pull request on the repository.

## License
This project is licensed under the ISC License - see the LICENSE file for details.
