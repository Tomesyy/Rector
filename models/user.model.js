import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    emailAddress: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);

const UserSchemaModel = mongoose.model('User', UserSchema);

export default UserSchemaModel;