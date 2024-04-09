import { createSlice,nanoid } from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:"user",
    initialState:{users:localStorage.getItem("users") ? 
    JSON.parse(localStorage.getItem("users")) :[]},
    reducers:{
        //functions 
        ADD_USER:(state,action)=>{
            console.log("add user",action.payload)
           
            // state.users.push(action.payload)

            // state.users.push({...action.payload,id:Date.now()})

            state.users.push({...action.payload,id:nanoid()})
            localStorage.setItem("users",JSON.stringify(state.users))
        },
        REMOVE_USER_ID(state,action){
            let filterusers=state.users.filter(user=>user.id != action.payload)
            state.users=filterusers
            localStorage.setItem("users",JSON.stringify(state.users))
        },
        REMOVE_USER_INDEX(state,action){
            // alert(action.payload)
            state.users.splice(action.payload,1)
            localStorage.setItem("users",JSON.stringify(state.users))
        },
        REMOVE_ALL(state,action){
            state.users=[]
            localStorage.removeItem("users")
        }
    }
})
console.log(userSlice.actions)
export const {ADD_USER,REMOVE_USER_ID,REMOVE_USER_INDEX,REMOVE_ALL}=userSlice.actions

export default userSlice.reducer

export const selectUsers=state=>state.user.users