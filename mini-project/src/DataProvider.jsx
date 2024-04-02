import React, { useState } from 'react'
import { createContext } from 'react'

export const DataContext=createContext()

const DataProvider = ({children}) => {
    let [cart,setCart]=useState([
        {
            "createdAt": "2024-03-27T17:36:57.807Z",
            "id": "1",
            "name": "product1",
            "price": "4000",
            "category": "Toys",
            "brand": "hp",
            "desc": "dfsdfsdfsf",
            "stock": "10"
        },
        {
            "createdAt": "2024-03-27T17:36:57.807Z",
            "id": "1",
            "name": "product1",
            "price": "4000",
            "category": "Toys",
            "brand": "hp",
            "desc": "dfsdfsdfsf",
            "stock": "10"
        }
    ])
    let [total,setTotal]=useState(0)
    let addToCart=(product)=>{
        alert(`added to cart ${product.name}`)
    }
    let increase=()=>{}
    let decrease=()=>{}
    let removeFromCart=()=>{}
    let emptyCart=()=>{}
    let calculateTotal=()=>{}
  return (
   <DataContext.Provider value={{cart,total,addToCart,increase,decrease,removeFromCart,emptyCart,calculateTotal}}>
        {children}
   </DataContext.Provider>
  )
}

export default DataProvider
