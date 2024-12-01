require('dotenv').config();

//need another connection

const connectDB = require('./db/connect');
const Product=require('./models/product');

const jsonProducts=require('./products.json');

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
       console.log('succese...');
       
    } catch (error) {
        console.log(error);
        
    }
}

start();