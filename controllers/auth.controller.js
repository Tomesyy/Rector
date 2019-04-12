import passport from 'passport';
import User from '../models/user.model';
import nodemailer from 'nodemailer';
import { getMaxListeners } from 'cluster';

const userAuthController = {
    registerUser(req, res){
        const newUser = new User({username: req.body.username, emailAddress: req.body.emailAddress, firstName: req.body.firstName, lastName: req.body.lastName });
        User.register(newUser, req.body.password, (err, user) => {
            if(err){
                console.log(err);
            } else {
                passport.authenticate('local')(req, res, () => {
                    console.log(`Sucessfully signed up ! Nice to meet you ${req.body.firstName }`);
                });
                
                //SEND MAIL

                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'adetomiwaadesanya01@gmail.com',
                        pass: 'bluwaters'
                    }
                });
                var mailOptions = {
                    from: 'adetomiwaadesanya01@gmail.com',
                    to: 'phillipowolana@gmail.com',
                    subject: 'Sign Up Confirmation Rector',
                    text: 'Thank you for signing up to Rector'
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if(error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
            }
        });
    },
    loginUser(req, res){

    },
    logoutUser(req, res){
        req.logout();
    }
}

export default userAuthController;