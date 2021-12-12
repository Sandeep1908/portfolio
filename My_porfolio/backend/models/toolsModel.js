import mongoose from 'mongoose';

const toolsShcema=new mongoose.Schema({
    name:{type:String},
    tool:{type:String},
    
})

const toolsModel=mongoose.model('tools',toolsShcema);
export default toolsModel;