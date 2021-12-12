import projectModel from "../models/porjectModel.js";
class portfolio{
    static home=async(req,res)=>{
        const result=await projectModel.find();
        res.send(result);
    }

    static get_data_id=async(req,res)=>{
        try{
        const id=req.params.id;
        const result=await projectModel.findById(id)
        res.send(result)
        }
        catch(err)
        {
            console.log(err);
        }
    }
}
export default portfolio;