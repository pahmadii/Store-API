require('dotenv').config();

//async errors


const express=require('express');
const app=express();
const connectDB=require('./db/connect');
const productsRouter=require('./routes/products');


const notFoundMiddleware=require('./middleware/not-found');
const errordMiddleware=require('./middleware/error-handler');

//middleware
app.use(express.json());

//routes
app.get('/',(req,res)=>{
res.send('<h1>Store API </h1><a href="/api/vi/products">prouducts route</a>')
})


app.use('/api/v1/products',productsRouter);

//prouduct route

app.use(notFoundMiddleware);
app.use(errordMiddleware);


const port=process.env.PORT || 3000;

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`listening on port ${port}....`))
    } catch (error) {
        console.log(error);
        
    }
}

start();