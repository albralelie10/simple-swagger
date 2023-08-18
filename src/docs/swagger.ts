import swaggerJSDoc,{OAS3Definition,OAS3Options} from "swagger-jsdoc";
import { SwaggerOptions } from "swagger-ui-express";

const swaggerDefinition:OAS3Definition={
    openapi:"3.0.3",
    info:{
        title:"Testing swagger-OPEN API tools",
        description: "My first API buiding with swagger and Open API :)",
        version:"1.0.0",
    },
    servers:[
        {
            url:"http://localhost:3000"
        }
    ],
    components: {
        securitySchemes: {
          bearerAuth:{
            type:"http",
            scheme:"bearer"
          }
        },
        schemas:{
            user:{
                type:"object",
                required:["name","email"],
                properties:{
                    name:{
                        type:"string"
                    },
                    email:{
                        type:"string"
                    },
                },
            },
            item:{
                type:"object",
                required: ["price","qty"],
                properties:{
                    price:{
                        type:"string"
                    },
                    qty:{
                        type:"string"
                    },
                },
            },
        },
    },
   
}

const swaggerOptions:SwaggerOptions={
    swaggerDefinition,
    apis: [".src/routes/*.js"]
}

export default swaggerJSDoc(swaggerOptions)


