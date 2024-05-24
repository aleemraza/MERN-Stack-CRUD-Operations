import React,{useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function Update() {
  const {id} = useParams()
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [mobile,setMobile] = useState()
  const navigate = useNavigate();

  const fetchData = async()=>{
    const data = await axios.get('http://localhost:8080/getuser/'+ id)
    console.log(data)
    setName(data.data.name)
    setEmail(data.data.email)
    setMobile(data.data.mobile)
  }
  useEffect(()=>{
    fetchData();
  },[])

  const Submit = (e)=>{
    e.preventDefault();
    axios.put("http://localhost:8080/update/" +id,{name,email,mobile})
    .then(result => {
      console.log(result)
      navigate("/")

    })
    .catch(err => console.log(err))
}
  return (
    <div>
      <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-primary" id="exampleModalLabel">Update User</h5>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name text-primary" className="col-form-label">Name</label>
            <input type="text" className="form-control" id="recipient-name" 
            value={name} onChange={(e)=> setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name text-primary" className="col-form-label">Email</label>
            <input type="email" className="form-control" id="recipient-name" 
            value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name text-primary" className="col-form-label">Number</label>
            <input type="number" className="form-control" id="recipient-name" 
            value={mobile} onChange={(e)=> setMobile(e.target.value)}/>
          </div>
          <button type="button" onClick={Submit}  className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}
