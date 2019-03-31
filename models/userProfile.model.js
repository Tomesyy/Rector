import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
   fullName: String,
   photo: String,
   emailAddress: String,
   matricNo: Number,
   Department: String, 
   Age: { type: Number, min: 16 },
   Address: String,
   phoneNumber: Number,
   dateOfBirth: { type: Date },
   brandName: String,
   instagramHandle: String,
   twitterHandle: String,
   linkedInHandle: String,
   Skills: String,
   Achievement: String
});

const userProfileSchemaModel = mongoose.model('UserProfile', userProfileSchema);

export default userProfileSchemaModel;