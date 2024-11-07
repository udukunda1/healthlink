import express from 'express';
import pharmaRoutes from './routes/pharmacy-routes.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
  });

app.use('/pharma', pharmaRoutes);


mongoose.connect(`mongodb+srv://boy:1235@cluster0.kdnd2.mongodb.net/healthlink`)
.then(() => {
    app.listen(5000);
    console.log('connected');
})
.catch(error => {
    console.log('failed to connect to database', error);
})