import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    gender:String,
    birthdate: String,
    age: Number
})

const userModel = mongoose.model('UserSchema',userSchema);

export default userModel;