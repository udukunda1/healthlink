import express from 'express';
import pharmaRoutes from './routes/pharmacy-routes.js';
import userRoutes from './routes/users-routes.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import pharmacy from './models/pharmacy.js';
import user from './models/user.js';


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

// app.use((req, res, next) => {
//   const created = new user({
//     name: 'patrick',
//     email: 'rumpatr048@gmail.com',
//     picture: 'hdhhdh',
//     password: 'hashed',
//   })
//   created.save();
//   res.json({message: 'user created'});
// })

// app.use(async (req, res, next) => {
//   const created = new pharmacy({
//     image: 'hwlll',
//     title: 'my title',
//     address: 'new home',
//     number: 250790417504,
//     workingHours: 'always',
//     password: 'hashed'
//   })
//   await created.save();
//   res.json({message: 'created pharmacy'});
// })

app.use('/pharma', pharmaRoutes);
app.use('/users', userRoutes);

app.use((req, res, next) => {
  res.json({message: 'can not find this end point'});
});


mongoose.connect(`mongodb+srv://boy:1235@cluster0.kdnd2.mongodb.net/healthlink`)
.then(() => {
    app.listen(5000);
    console.log('connected');
})
.catch(error => {
    console.log('failed to connect to database', error);
})