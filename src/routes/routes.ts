import { SwaggerRouter } from "koa-swagger-decorator";
// var router = require('koa-router');
import path from 'path'
import UserController  from "../controllers/users";
const multer = require('@koa/multer');

const upload = multer(); // note you can pass `multer` options here

const router = new SwaggerRouter();
router.post("/user",upload.single('user'), UserController.newUser);
router.swagger({
  title: "Simple API",
  description: "Simple file parsing API",
  version: "1.0"
});
router.mapDir(path.resolve(__dirname), {
  recursive: true,
  ignore: ["**.spec.ts"],
})
export { router };
