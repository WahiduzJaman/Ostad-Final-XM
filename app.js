const express =require('express');
const app= new express();
const router=require('./src/routes/api')

const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const hpp =require('hpp');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const mongoose =require('mongoose');




// Database Connection
let URI="mongodb://localhost:27017/Final-exam"
mongoose.connect(URI).then((res)=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})




app.use(cookieParser());
app.use(cors())
app.use(helmet())
app.use(hpp())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

app.set('etag', false);
app.use('/api', router);


// Add React Front End Routing
app.get('*',function (req,res) {
    res.status(404).json({status:"fail", data:"Not Found"})
})

module.exports=app;