import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


import userRoutes from './routes/users.js';


const app = express();

app.use(express.json({ limit: "30mb",extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//urls
app.get('/', function(req,res){
        res.send('hello world')
})
app.use('/users', userRoutes);



const CONNECTION_URL = 'mongodb+srv://mern:mongdb@test.vp9wu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT =  5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
        .then(() => app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
        .catch((error) => console.log(error.message));


