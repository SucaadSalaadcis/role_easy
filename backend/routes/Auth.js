const express = require('express');
const { register, login, Logout } = require('../controllers/Auth.js');

const AuthRoutes =  express.Router();

AuthRoutes.post('/register', register);
AuthRoutes.post('/login', login);
AuthRoutes.post('/logout', Logout);


module.exports = AuthRoutes;