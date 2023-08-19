import swaggerJSDoc, {OAS3Definition,OAS3Options} from "swagger-jsdoc"

const swaggerDefinition:OAS3Definition={
    openapi:"3.0.3",
    info:{
        title:"Mi primera API con OpenApi & Swagger :)",
        version:"1.0.0",
        description:"Probando una api con swagger y documentandola con openapi"
    },
    servers:[
        {
            url:"http://localhost:3000"
        }
    ],
    components:{
        securitySchemes:{
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
                    }
                }
            },
            item:{
                type:"object",
                required:["price","qty"],
                properties:{
                    price:{
                        type:"number"
                    },
                    qty:{
                        type:"number"
                    }
                }
            }
        }
    }
            
}

const swaggerOptions:OAS3Options={
    swaggerDefinition,
    apis:["./src/routes/*.ts"]
}

export default swaggerJSDoc(swaggerOptions)

// const swaggerDefinition: OAS3Definition = {
//     openapi: "3.0.0",
//     info: {
//       title: "Documentacion de mi API",
//       version: "1.0.0",
//     },
//     servers: [
//       {
//         url: "http://localhost:3000",
//       },
//     ],
//     components: {
//       securitySchemes: {
//         bearerAuth: {
//           type: "http",
//           scheme: "bearer",
//         },
//       },
//       schemas: {
//         user: {
//           type: "object",
//           required: ["name", "album", "cover", "artist", "duration", "mediaId"],
//           properties: {
//             name: {
//               type: "string",
//             },
//             email: {
//               type: "string",
//             },
//           },
//         },
//         item: {
//           type: "object",
//           required: ["price", "qty"],
//           properties: {
//             price: {
//               type: "string",
//             },
//             qty: {
//               type: "string",
//             },
//           },
//         },
//       },
//     },
//   };