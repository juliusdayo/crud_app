import  mongoose  from 'mongoose';
import UserModel from '../models/users.js'

export const getUsers = async (req, res)=> {
    try{
        const findUsers = await UserModel.find();

        res.status(200).json(findUsers);
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

export const createUser = async (req,res)=>{
    const user = req.body;
    const newUser = new UserModel(user);

    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch (error){
        res.status(409).json({message:error.message});
    }
}

export const deleteUser = async (req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Cannot be deleted');

    await UserModel.findByIdAndRemove(id);

    res.json({message: 'Deleted Successfully'})
}