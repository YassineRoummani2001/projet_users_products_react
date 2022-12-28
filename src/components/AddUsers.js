import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from "./Footer"
import data from './data.json'


function AddUsers() {
  const [datauser, setdatauser] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: 0,
    login: "",
    image:"",
    type: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldId = event.target.getAttribute("id");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldId] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id:addFormData.id ,
      login: addFormData.login,
      image: addFormData.image,
      type: addFormData.type,
    };

    const newContacts = [...datauser, newContact];
    setdatauser(newContacts);
  };

  return (
    <div>
    <h1>AddUsers</h1>
    <button type="button" className="btn" ><Link className="dropdown-item" to="/Users" > Users </Link></button>
      <form className="form-use container-fluid" onSubmit={handleAddFormSubmit}>
      <label htmlFor="id">Id :</label>
      <input className="form-control me-12" type="number" name="id" id="id" min={47} placeholder="Id" onChange={(event)=>{handleAddFormChange(event) }}/><br/>
      <label htmlFor="login">Login :</label>
      <input className="form-control me-12" type="text" name='login' id='login' placeholder='Login' onChange={handleAddFormChange}/><br/>
      <label htmlFor="image">Image :</label>
      <input className="form-control me-12" type="file" name="image" id="image" placeholder='Image' onChange={handleAddFormChange}/><br/>
      <label htmlFor="login">Type :</label>
      <input className="form-control me-12" type="text" name='type' id='type' placeholder='Type' onChange={handleAddFormChange}/><br/>
      <button type='submit' className="form-control me-12"  class="btn" Submit={handleAddFormSubmit} >Add User</button>
      </form>
      <Footer/>
    </div>
  )
}

export default AddUsers