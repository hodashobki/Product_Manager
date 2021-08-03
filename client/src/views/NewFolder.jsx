import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
const NewFolder = (props) => {
    const [product,setproduct]=useState({});
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" +props.id)
        .then(res=>setproduct(res.data.product))
    },[])
    const deleteProduct = (e) => {
        axios.delete("http://localhost:8000/api/products/delete/" +props.id)
        .then(res => navigate("/hoda"))
        .catch(err => console.log("-E- " + err))
    }
    return (
        <div>
            <h1>You are viewing one product</h1>
          <p>{product.title}</p>
          <p><button onClick={deleteProduct}>delete</button></p>
          <Link to ={"/products/"+props.id+"/edit"}>Edit Product</Link> 
        </div>
    )
}

export default NewFolder
