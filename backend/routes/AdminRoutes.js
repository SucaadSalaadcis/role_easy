const  { Getuser, deletUser } = require('../controllers/Admin.js');
const  isAdmin  = require('../middleware/verifyToken.js');

const express = require('express');


const AdminRoutes = express.Router();

AdminRoutes.get('/getuser', isAdmin, Getuser);
AdminRoutes.delete('/delet/:id',isAdmin,deletUser)


module.exports = AdminRoutes