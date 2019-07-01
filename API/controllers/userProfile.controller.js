import userProfile from '../models/userProfile.model';

const userProfileController = {
    fetchAllProfiles(req, res){
        userProfile.find({}, (err, allProfiles) => {
            if(err){
                console.log(err);
            } else {
                console.log(allProfiles);
            }
        });
    },
    addProfile(req, res){
        const profile = req.body;

        userProfile.create(profile, (err, newProfile) => {
            if(err){
                console.log(err);
            } else {
                console.log(newProfile);
            }
        });
    },
    findProfile(req, res){
        const id = req.params.id;
        
        userProfile.findById(id, (err, foundProfile) => {
            if(err){
                console.log(err);
            } else {
                console.log(foundProfile);
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
                console.log(updatedProfile);
            }
        });
    },
    deleteProfile(req, res){
        const id = req.params.id;

        userProfile.findByIdAndRemove(id, (err, deletedProfile) => {
            if(err){
                console.log(err);
            } else {
                console.log(deletedProfile);
            }
        });
    }

}

export default userProfileController;