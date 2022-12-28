import React from 'react'
import { Link } from 'react-router-dom'
import Footer from "./Footer"
import { useState } from 'react'


function AddProducts() {
  
  const [id,setProcuctId ] = useState('')
  const [title, setTitle] = useState('')
  const [thumbnail, setImage] = useState('')
  const [price, setPrice] = useState('')
  const mySubmit = (e)=>{
      e.preventDefault();
      const myproduct = {
          id,
          title ,
          thumbnail ,
          price ,
      }
      fetch('https://dummyjson.com/products', {
        method: 'POST',
        body: JSON.stringify(myproduct),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then(() => {
            console.log('new post added');
        });
    }
  return (
    <div>
      <h1>AddProducts</h1>
      <button type="button" className="btn" ><Link className="dropdown-item" to="/Products" > Products </Link></button>
      <form className="form-use container-fluid" onSubmit={mySubmit}>
      <label htmlFor="id">Id :</label>
      <input className="form-control me-12" type="number" name="id" id="id" min={31} placeholder="Id" value={id} onChange={(e) => setProcuctId(e.target.value)}/><br/>
      <label htmlFor="login">Title :</label>
      <input className="form-control me-12" type="text" name='title' id='title' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} /><br/>
      <label htmlFor="image">Image :</label>
      <input className="form-control me-12" type="file" name="image" id="image" placeholder='Image' value={thumbnail} onChange={(e) => setImage(e.target.value)}/><br/>
      <label htmlFor="type">Price :</label>
      <input className="form-control me-12" type="number" name='price' id='price' placeholder='Price' min={1} value={price} onChange={(e) => setPrice(e.target.value)}/><br/>
      <button className="form-control me-12" type="submit" class="btn">Add Product</button>
      </form>
      <Footer/>
    </div>
  )
}

export default AddProducts