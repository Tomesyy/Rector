import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
   fullName: String,
   photo: String,
   emailAddress: String,
   matricNo: Number,
   department: String, 
   age: { type: Number, min: 16 },
   address: String,
   phoneNumber: Number,
   dateOfBirth: { type: Date },
   brandName: String,
   instagramHandle: String,
   twitterHandle: String,
   linkedInHandle: String,
   skills: String,
   achievements: String,
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now }
});

const userProfileSchemaModel = mongoose.model('UserProfile', userProfileSchema);

export default userProfileSchemaModel;