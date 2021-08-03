import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import ProductForm from '../components/ProductForm';

const Main = (props) => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            setProduct(res.data.products)
        })
    },[product])

    return (
        <div>
            <h2>All Products</h2><span><Link to="/">Back to the Form</Link></span>
        <div style={{display:"flex",  justifyContent: "space-evenly",flexWrap: "wrap"
 }}>
          {product.map((product)=>{
              return(
                  <div key={product._id} style={{border:"1px solid black",width:"300px",height:"300px", marginLeft:"20px",padding:"15px"}} >
                      
                      <p><Link to = {"/products/"+product._id} key={product._id}>{product.title} </Link></p>
                      <p> Price : {product.price}$</p>
                      <p>Product description: {product.description}</p>
                      {/* <Link to ={"/products/"+product._id+"/edit"} >Edit Product</Link>  */}
                      <Link to={"/edit/"+product._id}>Edit Product</Link>

                  </div>
              );
          })}
        </div>
        </div>
    )
}

export default Main
