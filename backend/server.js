import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'
import { errorHandler, notFound } from './middleware/errorMiddleWare.js'
import connectDB from './config/db.js'
import eventRoutes from './routes/eventRoutes.js'
import http from 'http'
import { Server } from 'socket.io';

dotenv.config()
connectDB()
const port  = process.env.PORT ||  5000

const app = express()

// const server = http.createServer(app);

// const io =  new Server(server,{
//   cors:{
//     origin:'http://localhost:5000/',
//     methods:["GET","POST"]
//   }
// });
 
app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

app.use('/api/users',userRoutes)
app.use('/api/users',eventRoutes)

app.use(errorHandler)

app.use(notFound)

app.get('/',(req,res)=>{    

res.send('server is ready')

})

app.listen(port,()=>console.log(`server is running at port ${port}`))



