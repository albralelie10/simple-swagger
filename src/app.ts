import express from "express"
const app=express()
const PORT=3000
import swaggerUI from "swagger-ui-express"
import swaggerSetup from "./docs/openapi"
import router from "./routes/users"

app.use(express.json())
app.use("/",router)
app.use("/documentation",swaggerUI.serve,swaggerUI.setup(swaggerSetup))



app.listen(PORT,()=>console.log("Server is running...."))