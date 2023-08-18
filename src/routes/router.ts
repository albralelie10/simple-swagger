import express,{Response,Request} from "express"
const router=express.Router()

router.route("/").get((req,res)=>(res.send("Start Home")))

export default router