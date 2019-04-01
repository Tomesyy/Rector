import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userProfile from './models/userProfile.model';

// routes
import userProfileRoutes from './routes/userProfile.route';



const app = express();
const PORT = 2345;

// DATABASE connection
mongoose.connect('mongodb://localhost:27017/Rector', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// routes USAGE
app.use('/', userProfileRoutes);



// Application Listener
app.listen(PORT, () => {
    console.log(`Rector Server is running on PORT ${PORT}`);
});