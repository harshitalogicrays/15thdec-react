import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'

const mystore=configureStore({
    reducer:{
        user:userSlice
            }
})
export default mystore