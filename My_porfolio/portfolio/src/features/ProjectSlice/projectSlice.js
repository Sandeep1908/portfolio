import {createSlice} from '@reduxjs/toolkit';
const initialState={
    value:[],
}

const projectSlice=createSlice({
    name:'project',
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.value=action.payload;
        }
    }
})


export const {setData} =projectSlice.actions;
export default projectSlice.reducer;