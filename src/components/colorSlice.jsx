import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgcolor:"green"
    },

    reducers:{
        bgColorChange:(state,actions)=>{
            console.log(actions.payload);
            state.bgcolor=actions.payload.clr;
        }
    }
})

export const {bgColorChange}=colorSlice.actions;
export default colorSlice.reducer;


