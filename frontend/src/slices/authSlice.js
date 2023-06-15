import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:'authSlice',
    initialState:{
        userInfo:localStorage.getItem('userInfo') ? JSON.stringify(localStorage.getItem('userInfo')): null
    },
    reducers:{
        setCredentials:(state,action)=>{
            state.userInfo = action.payload
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
        logout:(state,action)=>{
            state.userInfo = null,
            localStorage.removeItem('userInfo')
        }
    }
})
export default authSlice.reducer;
export const { setCredentials, logout} = authSlice.actions;