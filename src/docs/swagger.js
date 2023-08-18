"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: "3.0.3",
    info: {
        title: "Testing swagger-OPEN API tools",
        description: "My first API buiding with swagger and Open API :)",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:3000"
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer"
            }
        },
        schemas: {
            user: {
                type: "object",
                required: ["name", "email"],
                properties: {
                    name: {
                        type: "string"
                    },
                    email: {
                        type: "string"
                    },
                },
            },
            item: {
                type: "object",
                required: ["price", "qty"],
                properties: {
                    price: {
                        type: "string"
                    },
                    qty: {
                        type: "string"
                    },
                },
            },
        },
    },
};
const swaggerOptions = {
    swaggerDefinition,
    apis: [".src/routes/*.js"]
};
exports.default = (0, swagger_jsdoc_1.default)(swaggerOptions);
