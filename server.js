const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { readdirSync } = require('fs');

//Import Routes
// const authRoutes = require('./routes/auth');
// const personRoutes = require('./routes/person');

// app
const app = express();


// connect db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true 
})
    .then(()=>console.log('DB Connected'))
    .catch((err)=>console.log('Cannot Connect to DB',err))




//middleware
app.use(morgan("dev"));
app.use(bodyParser.json({limit: "2mb"}));
app.use(cors());



//route
// app.use('/api',authRoutes);
// app.use('/api',personRoutes);
readdirSync('./routes').map((r) => app.use("/api",require('./routes/' + r)));


const port = process.env.PORT || 5000;
app.listen(port,()=> console.log('Server is Running On port ',port));