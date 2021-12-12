import mongoose from 'mongoose';

const porjectSchema=new mongoose.Schema({
    backgroundImg:{type:String},
    title:{type:String},
    discription:{type:String},
    git_link:{type:String},
    tech:{type:Array}


})

const projectModel= mongoose.model('project',porjectSchema);

export default projectModel;