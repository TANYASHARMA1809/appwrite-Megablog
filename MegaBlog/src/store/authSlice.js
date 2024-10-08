import { createSlice } from "@reduxjs/toolkit";
//this slice work is to track the authentication
const initialState={
    status:false,
    userData:null
}
const authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        login: (state,action)=>{
           // console.log(action.payload)
            state.status=true;

            state.userData=action.payload;
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})


export const {login,logout}=authSlice.actions;
export default authSlice.reducer;