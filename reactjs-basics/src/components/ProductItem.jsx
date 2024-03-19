import React from 'react'

const ProductItem = ({product}) => {
  return (
  <>
  <tr>
    <td>{product.id}</td>
    <td>{product.name}</td>
    <td><img src={require(`../assets/${product.image}`)}  width={50} height={50}/></td>
    <td>{product.qty}</td>
    <td>{product.price}</td>
  </tr>
  </>
  )
}

export default ProductItem
