import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar-me container-fluid'>
    <nav className="navbar-me navbar navbar-expand-lg" >
  <div className="container-fluid">
  <Link className="navbar-brand" to="Home"><img src={require('./images/employee.png')} alt="" height={60} width={60} /></Link>
    <button id='navbar-toggler' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span id='navbar-toggler-icon' className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="dropdown-item"  to="Home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="dropdown-item"  to="Users">Users</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="dropdown-item"  to="AddUsers">Add Users</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="dropdown-item"  to="Products">Products</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="dropdown-item"  to="AddProducts">Add Products</Link>
        </li>
       
      </ul>
      <form className="d-flex " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar