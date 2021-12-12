import mongoose from 'mongoose';


const connectdb=async(url)=>{
    try {
        const option={
            dbName:process.env.db_name
        }
        await mongoose.connect(url,option);
        console.log('connection successfully');
    } catch (error) {
        console.log(error)
    }
}
export default connectdb;