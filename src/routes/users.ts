import express,{Response,Request, response} from "express"
const router=express.Router()

const users=[
    {
        name:"polo",
        email:"polo@contoso.com"
    }, {
        name:"noemi",
        email:"noemi@contoso.com"
    }, {
        name:"deldrima",
        email:"deldrima@contoso.com"
    }
]
router.get("/user",(req:Request,res:Response)=>{
    return res.status(200).json({users})
})

/**
 * @openapi
 * /user:
 *   post:
 *    tags:
 *     - users
 *    summary: "Agrear un nuevo User"
 *    description: Este endpint permite un usuario a la coleccion
 *    requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/user"
 *    responses:
 *      "201":
 *         description: "Usuaro agregado con exito a la collecion"
 *      "400":
 *          description: "Hubo un error al agregar el usuario"
 *    security:
 *          - bearerAuth: []
 */





router.post("/user",(req:Request,res:Response)=>{
    const {body}=req;
    console.log(body)
    if( "name" in body && "email" in body){
        users.push(body)
        res.status(201).json({users})
    }else{
        res.status(400).send("Error")
    }
    
})
export default router;