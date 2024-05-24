import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function Create() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [mobile,setMobile] = useState()
    const navigate = useNavigate();

    const Submit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/create",{name,email,mobile})
        .then(result => {
          console.log(result)
          navigate("/")

        })
        .catch(err => console.log(err))
    }

  return (
<>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-primary" id="exampleModalLabel">Add User</h5>
      </div>
      <div className="modal-body">
        <form onSubmit={Submit}>
          <div className="mb-3">
            <label htmlFor="recipient-name text-primary" className="col-form-label">Name</label>
            <input type="text" className="form-control" id="recipient-name"  
            onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name text-primary" className="col-form-label">Email</label>
            <input type="email" className="form-control" id="recipient-name" 
             onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name text-primary" className="col-form-label">mobile</label>
            <input type="number" className="form-control" id="recipient-name" 
            onChange={(e)=> setMobile(e.target.value)}/>
          </div>
          <button type="button" onClick={Submit}  className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    </div>
    </>   
  )
}
