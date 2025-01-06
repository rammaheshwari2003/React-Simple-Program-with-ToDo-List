import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },

    reducers:{
        Increment:(state)=>{
            state.count=state.count+1;
        },
        Decrement:(state)=>{
            if(state.count>=1){
                state.count=state.count-1;
            }
            else{
                alert("No Decrement The Value Less Then Zero");
            }
        },
        reset:(state)=>{
            state.count=0;
        }
    }
})

export const {Increment, Decrement, reset}=counterSlice.actions;
export default counterSlice.reducer;

