import express from "express";
const app=express()
const PORT=3000
import swaggerUI from "swagger-ui-express"
import swaggerSetup from "./docs/swagger"
import router from "./routes/router"

app.use(express.json())
app.use("/",router)
app.use("/documentation",swaggerUI.serve,swaggerUI.setup(swaggerSetup))

app.listen(PORT,()=>console.log("server running..."))

