import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import categorySlice from './categorySlice'
import sliderSlice from './sliderSlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'

const store=configureStore({
    reducer:{
    auth:authSlice,
    category:categorySlice,
    slider:sliderSlice,
    product:productSlice,
    cart:cartSlice
    }
})
export default store