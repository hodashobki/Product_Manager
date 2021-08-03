import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
const Edit = (props) => {
    const[title,setTitle]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" +props.id)
        .then(res=>{
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
    },[])
const editProduct=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:8000/api/products/"+ props.id ,{
        title,price,description
    })
    .then(res=>navigate("/hoda"));
}

    return (
        <div>
        <form onSubmit={editProduct}>
           <p>
               <label>Title: </label>
               <input type="text" name="title" onChange={(e)=>{setTitle(e.target.value)}} value={title} ></input>
               
          </p> 
          <p>
               <label>Price: </label>
               <input type="number" name="price" onChange={(e)=>{setPrice(e.target.value)}} value={price}></input>
               
          </p> 
          <p>
               <label >Description</label>
               <input  type="text"  name="description" onChange={(e)=>{setDescription(e.target.value)}}value={description}></input>
               
          </p>
          <button >Create Product</button>
          
          </form> 
          
        </div>
    )
}

export default Edit
