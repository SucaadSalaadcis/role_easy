const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

// verify user
const isAdmin = async (req, res, next) => {
    try {

        const token = req.cookies.token; // req.cookies.tokenName
        if (!token) {
            return res.status(401).json({ messsage: "'Unauthorized: No token provided'" })
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRETE)
        // console.log(decoded);
        const user = await userModel.findById(decoded.userId)
        // console.log(user); // return all user schema name, pass, email, role

        if (!user) {
            return res.status(401).json({ messsage: "'user not found'" })
        }

        if (user.role !== 'admin') {
            return res.status(403).json({ messsage: 'Unauthorized: User is not an admin' })
        }
        req.user = user;
        next();

    } catch (error) {
        return res.json(error);
    }
}

module.exports = isAdmin;