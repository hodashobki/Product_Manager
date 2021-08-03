import React,{useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';

const ProductForm = (props) => {
    const[title,setTitle]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    const [titleError,setTitleError]=useState("");
    const [priceError,setPriceError]=useState("");
    const [descriptionError,setDescriptionError]=useState("");
    const [submitError,setsubmitError]=useState("");


   const titleerrorMsg={
       empty:"This field must not be Empty",
       minlength:"The minimum characters allwoed is 2"
   }

   const descriptionMsg={
       empty:"Description must not be Empty",
       minlength:"the minimum characters allowed is 2"
   }
   const priceErrorMsg={
       empty:"This field must not be Empty",
       minprice:"Price must be 1$ at Least",
       maxPrice:"Price must be 100$ at Most"
   }

   const titleValidation=(value)=>{
    setTitle(value);
    if(value.length < 1 ){
        setTitleError(priceErrorMsg.empty);
        return false;
    }
    else if (value.length < 2  && value.length!==0){
        setTitleError(titleerrorMsg.minlength);
        return false;
    }
    else {
        setTitleError("");
        return true;
    }
   };

  const descriptionValidation=(value)=>{
       setDescription(value);
       if (value.length<1 ){
           setDescriptionError(descriptionMsg.empty);
           return false;
       }
       else if(value.length<2 && value.length !== 0){
           setDescriptionError(descriptionMsg.minlength);
           return false;
       }
       else {
           setDescriptionError("");
           return true;
       }
  };

  const priceValidation=(value)=>{
      setPrice(value);
      if(value.length <1 && value!==0){
          setPriceError(priceErrorMsg.empty);
          return false;
      }
      else if(!isNaN(value)&& parseInt(value)<1){
          setPriceError(priceErrorMsg.minprice);
          return false;
      }
      else if (!isNaN(value)&& parseInt(value)>100){
          setPriceError(priceErrorMsg.maxPrice);
          return false;
      }
      else {
          setPriceError("");
          return true;
      }
      
  }

  const submitErrMsg={
    noSubmit:"Your Submition is not allowed befor correcting the form"
  }

    const handelSubmit=(e)=>{
        e.preventDefault();
       if(titleValidation(title)&&priceValidation(price)&&descriptionValidation(description)){

        axios.post("http://localhost:8000/api/products/new",{
            title,price,description
        })
        .then(res=>{
            setTitle("");
            setPrice(1);
            setDescription("");
           navigate("/hoda");
    })
    
        .catch(err=>{
           const errstr= err.response.data.error.errors.title.message + " or " +
            err.response.data.error.errors.price.message + "or "+err.response.data.error.errors.description.message;
            setsubmitError(errstr);
        })
}
else{
    setsubmitError(submitErrMsg.noSubmit);
}
    };

    return (
        <div>
            <h2>Product Manager</h2>
            <p> <Link to="/hoda"> All Products</Link> </p>
            <form onSubmit={handelSubmit}>
           <p>
               <label>Title: </label>
               <input type="text" onChange={(e)=>{titleValidation(e.target.value)}} value={title} ></input>
               {
                   titleError&&
                   <p style={{color:"red"}}>{titleError}</p>
               }
          </p> 
          <p>
               <label>Price: </label>
               <input type="number" onChange={(e)=>{priceValidation(e.target.value)}} value={price}></input>
               {
                   priceError&&
                   <p style={{color:"red"}}>{priceError}</p>
               }
          </p> 
          <p>
               <label >Description</label>
               <input  type="text"  onChange={(e)=>{ descriptionValidation(e.target.value)}}value={description}></input>
                {
                    descriptionError &&
                    <p style={{color:"red"}}> {descriptionError}</p>
                }
          </p>
          <button >Create Product</button>
          {
              submitError &&
              <p style={{color:"red"}}>{submitError}</p>
          }
          </form> 
          
          
        </div>
    )
}

export default ProductForm
