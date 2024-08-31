const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const DbCon = require('./utils/db.js');
const AuthRoutes = require('./routes/Auth.js');
const AdminRoutes = require('./routes/AdminRoutes.js');

dotenv.config()
const PORT=process.env.PORT || 3000
const app=express()

// mongo db 
DbCon()
app.use(express.json())
app.use(cookieparser())

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'  
}));

app.use('/api/auth',AuthRoutes)
app.use('/api/admin',AdminRoutes)

app.get('/',(req,res)=>{
    res.send('test')
})

app.listen(5000,()=>{
    console.log(`server is running on 5000`)
})