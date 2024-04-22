import React from 'react'
import { Row, Col} from 'react-bootstrap'
import ProductCard from './ProductCard'
import Loader from './Loader'
import useFetchCollection from '../custom hook/useFetchCollection'

const ProductsList = ({products}) => {
   const {data:categories}=useFetchCollection("categories")
  return (
   <>
      {products.length==0 ? <h1>No Product Found</h1>
      :
      <>
     <Row>
      <Col xs={{span:'4'}}>
         <div className='row'>
            <label class="col-form-label col-3"><b>Category:</b></label>
            <div className="col-7">
                  <select class="form-select" >
                     <option value='' selected disabled> Select one</option>
                     {categories.map((c,i)=>
                     <option key={c.id}>{c.title}</option>
                  )}
                  </select>
            </div>
         </div>
      </Col>
      <Col xs={{span:'4',offset:'4'}}>    
      <div className='row'>
            <label class="col-form-label col-3"><b>Sort By:</b></label>
            <div className="col-7">
                  <select class="form-select" >
                     <option value='' selected disabled>Select one</option>
                     <option value="low">Low to High</option>
                     <option value="high">High to Low</option>
                  </select>
            </div>
         </div></Col>
      </Row>

      <Row>
         {products.map((product,i)=><ProductCard key={[product.id]}  product={product}/>)}
      </Row>
      </>
}
   
   </>
  )
}

export default ProductsList
