import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import localStrategy from 'passport-local';
import User from './models/user.model';
import userProfile from './models/userProfile.model';
import path from 'path';

// routes
import userProfileRoutes from './routes/userProfile.route';
import authRoutes from './routes/userAuth.route';


const app = express();
const PORT = 2345;

// DATABASE connection
mongoose.connect('mongodb://localhost:27017/Rector', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/stylesheets"));

// Passport configuration
//express-session
app.use(require('express-session')({
    secret: 'This one is for Rector',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// routes USAGE
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"/views/index.html"));
});
app.use('/', userProfileRoutes);
app.use('/', authRoutes);



// Application Listener
app.listen(PORT, () => {
    console.log(`Rector Server is running on PORT ${PORT}`);
});