import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Style.css'
export default function User() {
    const [users, setUsers] = useState([]);

    const fetchData = async()=>{
      const data = await axios.get('http://localhost:8080')
      console.log(data)
      if(data.data.success){
        setUsers(data.data.data)
      }

    }
    useEffect(()=>{
      fetchData();
    },[])
    const handelDelete =  async(id)=>{
      const data = await axios.delete("http://localhost:8080/delete/"+id)
      if(data.data.success){
        fetchData();
        alert(data.data.message)  
      }

    }
  return (
<div>
  <h1 className='text'>MERN CRUD APPLICATION</h1>
<div className="d-flex vh-100 justify-content-center align-items-center">
 <div className='w-50 bg-white rounded p-3'>
<Link to="/create"  className='btn btn-primary'>Add+</Link>
<table className="table table-hover">
  <thead>
    <tr>
       <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  { users.map((user)=>{
    return(
      <tr>
      <th scope="row">1</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.mobile}</td>
      <td>
      <Link to={`/update/${user._id}`}  className='btn btn-primary text-black'>Update</Link>
        </td>
        <td>
        <button onClick={()=> handelDelete(user._id)} className='btn btn-danger'>Delete</button>
        </td>
    </tr>

    );
  })
  }
  </tbody>
</table>
</div> 
</div>     
    </div>
  )
}
