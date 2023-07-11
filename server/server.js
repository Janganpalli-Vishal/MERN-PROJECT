import Express from "express"
import cors from "cors"
import route from "./Routes/studentRoute.js"
import dotenv from "dotenv"
import connect from "./Database/conn.js"



const app = Express()

dotenv.config()

app.use(cors())
app.use(Express.json())
app.use("/api",route)


connect().then(()=>{
    app.listen(5000, ()=>{
        console.log("server running in port :", 5000)
    })
}).catch(err =>{
    console.log(err)
})






