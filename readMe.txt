# User Management API

This User Management API is built with Node.js and Express. 
It allows for basic CRUD operations to manage users.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Contact](#contact)

## Introduction

This API was developed to demonstrate a basic structure of a RESTful API using Node.js 
and Express. It includes CRUD operations to manage users.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (version 6.x or higher)

## Installation

1. Clone the repository from GitHub:

   ```sh
   git clone https://github.com/DES-Group/users-api.git
   cd users-api

2. Install the necessary dependencies:
    ```sh 
   npm install

3. Start the server 
    ```sh 
    npm start 

The server will start on http://localhost:5000

4. Usage
To interact with the API, you can use a tool like Postman or curl.

    Routes
    Here are the available routes in the API:

    - GET /users         Retrieves a list of all users.
    - GET /users/:id     Retrieves the details of a user by id 
    - POST /users        Creates a new user.
    - PATCH /users/:id   Update a user according to an id 
    - DELETE /users/:id  Delete a from according to an id 

5. Contact
For any questions or suggestions, you can contact me at:

    Donatien OUSSA
    donatienoussaodb@gmail.com
