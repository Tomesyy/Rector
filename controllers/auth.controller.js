import passport from 'passport';
import User from '../models/user.model';

const userAuthController = {
    registerUser(req, res){
        const newUser = new User({username: req.body.username, emailAddress: req.body.emailAddress, firstName: req.body.firstName, lastName: req.body.lastName });
        User.register(newUser, req.body.password, (err, user) => {
            if(err){
                console.log(err);
            }
            passport.authenticate('local')(req, res, () => {
                console.log(`Sucessfully signed up ! Nice to meet you ${req.body.firstName }`);
            });
        });
    },
    loginUser(req, res){

    },
    logoutUser(req, res){
        req.logout();
    }
}

export default userAuthController;