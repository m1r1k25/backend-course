import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'

const PORT = 5000

const DB_URL = `mongodb+srv://user111:user111@clustera.ujgufi5.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())

app.post('/', async (req, res) => {
  try {
    const {author, title, content, picture} = req.body
    const post = await Post.create({author, title, content, picture})
    res.json(post)
  } catch(e) {
      res.status(500).json(e.message)
  }
})

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true}) 
    app.listen(PORT, () => console.log(`server start on ${PORT}`))
  } catch(e) {
    console.log(e)
  }
}

startApp()

