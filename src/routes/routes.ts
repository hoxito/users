import { SwaggerRouter } from "koa-swagger-decorator";
// var router = require('koa-router');
import koaBody from 'koa-body'
import UserController  from "../controllers/users";
const multer = require('@koa/multer');

const upload = multer(); // note you can pass `multer` options here

const router = new SwaggerRouter();
router.post("/user",upload.single('user'), UserController.newUser);
router.post("/users", UserController.createUser);
// Swagger endpoint
// rtr.swagger({
//   title: "Simple API",
//   description: "Simple file parsing API",
//   version: "1.0"
// });

export { router };
