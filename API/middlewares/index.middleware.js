import User from '../models/user.model';
import userProfile from '../models/userProfile.model';

const middleware = {
    checkProfileOwnership(req, res, next){
        if(req.isAuthenticated()){
            userProfile.findById(req.params.id, (err, foundProfile) => {
                if(err){
                    res.redirect('back');
                } else {
                    if(foundProfile.author.id.equals(req.user._id)){
                        next();
                    } else {
                        res.redirect('back');
                    }
                }
            });
        } else {
            console.log('You do not have permission to do that');
        }
    },
    isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        } else {
            console.log('You need to be loogged in to do that');
        }
    }

}

export default middleware;