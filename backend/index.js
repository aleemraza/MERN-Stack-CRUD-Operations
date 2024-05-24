const express = require('express')
require ("./db/CDB")
const User = require("./db/User")
const cors = require('cors')
const app = express()
const port = 8080
app.use(express.json());
app.use(cors());

app.get('/',  async(req, res) => {
  const data = await User.find({})
  res.json({success: true , data: data})
});
app.get('/getuser/:id', (req,res)=>{
  const id = req.params.id
  User.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})
app.post("/create", async (req,res) =>{
    console.log(req.body)
    const data = new User(req.body)
    await data.save()
    res.send({success:true , message:"Save data" , data:data})
});

app.put("/update/:id" ,(req,res)=>{
   const id = req.params.id
   User.findByIdAndUpdate({_id:id},{name: req.body.name,email: req.body.email,mobile: req.body.mobile})     
  .then(users => res.json(users))
  .catch(err => res.json(err))

});

app.delete("/delete/:id" , async(req,res)=>{
    const id = req.params.id
    console.log(id)
    const data = await User.deleteOne({_id:id})
    res.send({success:true , message:" delete data" , data:data})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})