import userProfile from '../models/userProfile.model';

const userProfileController = {
    fetchAllProfiles(req, res){
        userProfile.find({}, (err, allProfiles) => {
            if(err){
                console.log(err);
            } else {
                return allProfiles;
            }
        });
    },
    addProfile(req, res){
        const profile = req.body;

        userProfile.create(profile, (err, newProfile) => {
            if(err){
                console.log(err);
            } else {
                return newProfile;
            }
        });
    },
    findProfile(req, res){
        const id = req.params.id;
        
        userProfile.findById(id, (err, foundProfile) => {
            if(err){
                console.log(err);
            } else {
                return foundProfile;
            }
        });
    },
    updateProfile(req, res){
        const id = req.params.id;
        const profile = req.body;

        userProfile.findByIdAndUpdate(id, profile, (err, updatedProfile) => {
            if(err){
                console.log(err);
            } else {
                return updatedProfile;
            }
        });
    },
    deleteProfile(req, res){
        const id = req.params.id;

        userProfile.findByIdAndRemove(id, (err, deletedProfile) => {
            if(err){
                console.log(err);
            } else {
                return deletedProfile;
            }
        });
    }

}

export default userProfileController;