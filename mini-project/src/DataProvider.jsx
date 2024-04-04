import React, { useState } from 'react'
import { createContext } from 'react'
import { toast } from 'react-toastify'

export const DataContext=createContext()

const DataProvider = ({children}) => {
    let [cart,setCart]=useState([])
    let [total,setTotal]=useState(0)
    let addToCart=(product)=>{
        if(sessionStorage.getItem("logindata")!=null){
            let obj=JSON.parse(sessionStorage.getItem("logindata"))
            if(obj.isLoggedIn){
                const itemIndex=cart.findIndex(item=>item.id==product.id)
                console.log(itemIndex)
                if(itemIndex==-1){
                    setCart([...cart,{...product,qty:1}])
                    toast.success(`${product.name} added to cart`)
                }
               else    toast.error(`${product.name} already added to cart`)
            }
        }
        else {
            toast.info('please login first')
        }
    }
    let increase=(product)=>{
        // console.log(product)
        const itemIndex=cart.findIndex(item=>item.id==product.id)
        if(itemIndex != -1){
            if(cart[itemIndex].stock > product.qty ){
                cart[itemIndex].qty++
                setCart([...cart])
             }
            else toast.info(`only ${cart[itemIndex].stock} available`)
        } }
    let decrease=(product)=>{
        const itemIndex=cart.findIndex(item=>item.id==product.id)
        if(itemIndex != -1){
            if(product.qty > 1){
                cart[itemIndex].qty--
                setCart([...cart])
            }
        }
    }
    let removeFromCart=(id)=>{
        let filterdata=cart.filter((item)=>item.id!=id)
        setCart([...filterdata])
        //const itemIndex=cart.findIndex(item=>item.id==product.id)
        //cart.splice(itemIndex,1)
        //setCart([...cart])
    }
    let emptyCart=()=>{ setCart([]);setTotal(0)}
    let calculateTotal=()=>{
       const t = cart.reduce((prev,cur)=>{return prev+(cur.price*cur.qty)},0)
       setTotal(t)
    }
  return (
   <DataContext.Provider value={{cart,total,addToCart,increase,decrease,removeFromCart,emptyCart,calculateTotal}}>
        {children}
   </DataContext.Provider>
  )
}

export default DataProvider
