## Backend - CRUD & Authentication API

[![View Frontend](https://img.shields.io/badge/Open-Frontend-blue?logo=react)](https://github.com/andyhap/CRUD-and-Authentication-with-React.js.git)

This project represents the **Backend** part of a simple CRUD and authentication system built using **Node.js**, **Express**, **PostgreSQL**, and **JWT**.

🔗 **Frontend Repository:** [Click here to view the Frontend](https://github.com/andyhap/CRUD-and-Authentication-with-React.js.git)

## How To Use

### create env file
First, make sure to create a .env file in the root project and fill it with the following format:

```bash
PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=(your db name)
DB_PASS=(your db password)
DB_PORT=(your db port)
DB_DIALECT=postgres
JWT_SECRET=(jwt secret)
```
JWT secret can be generated from: https://www.jwt.io/

### Running user_management_api
Next, you can run the user_management_api by typing:

```bash
node index.js
# or
npm start
```

If successful, a message will appear in the terminal:

```bash
Server running on port 5000
Database connected & synced
```

### postman
https://documenter.getpostman.com/view/49108277/2sB3WqufTu

