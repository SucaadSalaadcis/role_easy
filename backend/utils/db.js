const mongoose = require('mongoose');

const DbCon = async() => {
    try {
       await mongoose.connect(process.env.DB);
       console.log('DB connected Successfully...')
    } catch (error) {
        console.log(error);
    }
}

module.exports = DbCon;