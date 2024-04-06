import { createSlice,nanoid } from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:"user",
    initialState:{users:[]},
    reducers:{
        //functions 
        ADD_USER:(state,action)=>{
            console.log("add user",action.payload)
           
            // state.users.push(action.payload)

            // state.users.push({...action.payload,id:Date.now()})

            state.users.push({...action.payload,id:nanoid()})
        },
        REMOVE_USER(state,action){}
    }
})
console.log(userSlice.actions)
export const {ADD_USER,REMOVE_USER}=userSlice.actions

export default userSlice.reducer