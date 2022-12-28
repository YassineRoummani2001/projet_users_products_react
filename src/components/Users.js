import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Users() {
    const [datauser, setdatauser] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3004/user`)
          .then((res) => {
              return res.json();
          })
          .then((users)=>{
            setdatauser(users)
            
          })
      
      
  },
      []
  )

    const deleteUser = (indice) => {
        let t = [...datauser]
        t.splice(indice, 1);
        setdatauser(t)
        console.log(datauser);
    }

    
    return (
        <div>
            <h1>Users</h1>
      <button type="button" className="btn" >
      <Link className="dropdown-item" to="/AddUsers" >Add Users</Link>
      </button>
            <table id='table' class="table table-warning table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Login</th>
      <th scope="col">Images</th>
      <th scope="col">Type</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
                <tbody>
                    {datauser &&
                        datauser.map(
                            (users, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{users.id}</td>
                                        <td>{users.login}</td>
                                        <td ><img src={users.avatar_url} height='100'/></td>
                                        <td>{users.type}</td>
                                        <td >
                          <button type="button" class="btn-delete " onClick={()=>{deleteUser(index)}}> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg> 
                          </button> 
                          <button type="button" class="btn-edit "> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                          </svg>
                          </button> 
                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
 
                </tbody>
            </table>
            <Footer />
        </div>
    )
}

export default Users