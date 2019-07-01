import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
// import passportEmail from 'passport-email';

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);
// UserSchema.plugin(passportEmail);

const UserSchemaModel = mongoose.model('User', UserSchema);

export default UserSchemaModel;