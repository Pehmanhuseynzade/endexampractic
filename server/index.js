const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
dotenv.config()
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const categoriesSchema = new mongoose.Schema({
     name: String, 
     price: Number,
     desc: String,
     image:String,
   });

const catBlog = mongoose.model('Categories', categoriesSchema);


//POST

app.post(`/api/categories`,async(req,res)=>{
     const{name,price,desc,image} = req.body
     const newPost = new catBlog({
          name : name,
          price : price,
          desc:desc,
          image:image,
     })
     await newPost.save()
     res.status(201).send({
          message:"Posted succefully!",
          payload:newPost
     })
})

//GET

app.get(`/api/categories`,async(req,res)=>{
     const{name} = req.query
     const newGet = await catBlog.find()
     if(!name){
          res.status(200).send(newGet)
     }
     else{
          const searched = newGet.filter((x)=>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
          )
          res.status(200).send(searched)
     }
})

//GET ID

app.get(`/api/categories/:id`,async(req,res)=>{
     const {id} = req.params
     const newID = await catBlog.findById(id)
     res.status(200).send(newID)
})

//DELETE

app.delete(`/api/categories/:id`,async(req,res)=>{
     const id = req.params.id
     const newDelete = await catBlog.findByIdAndDelete(id)
     res.status(200).send(newDelete)

})

//Put

app.put(`/api/categories/:id`,async(req,res)=>{
     const id = req.params.id
     const{name,price,desc,image} = req.body
     const newPut = {
          name : name,
          price : price,
          desc:desc,
          image:image,
     }
     await catBlog.findByIdAndUpdate(id,newPut)
     res.status(200).send(newPut)
})



//-------------------------------------------------------------------

PORT = process.env.PORT
app.listen(PORT, () => {
     console.log(`Example app listening on port ${PORT}`)
   })

DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(DB_CONNECTION.replace('<password>',DB_PASSWORD)).then(()=>{
     console.log("Mangodb Connection!!")
});
