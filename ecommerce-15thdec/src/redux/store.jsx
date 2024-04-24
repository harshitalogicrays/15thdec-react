import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import categorySlice from './categorySlice'
import sliderSlice from './sliderSlice'
import productSlice from './productSlice'

const store=configureStore({
    reducer:{
    auth:authSlice,
    category:categorySlice,
    slider:sliderSlice,
    product:productSlice
    }
})
export default store