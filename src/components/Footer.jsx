import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
<div>
<div class="card text-bg-dark">
  <img src={require("./images/footer.jpg")} class="card-img" alt="..." height={200} width={200}/>
  <div class="card-img-overlay">
        <Link className="dropdown-item"  to="/Home"> Home</Link>
        
        <Link className="dropdown-item"  to="/Users"> Users</Link>
        
        <Link className="dropdown-item"  to="/AddUsers"> Add Users</Link>

        <Link className="dropdown-item"  to="/Products"> Products</Link>

        <Link className="dropdown-item"  to="/AddProducts"> Add Products</Link>
        <h3 className='card-title'>By <span>Yassine Roummani</span></h3>
</div>
</div>
    </div>
)
}

export default Footer