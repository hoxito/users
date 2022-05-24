import Koa from "koa";
import body from "koa-body";
import cors from "koa2-cors";
import logger from "koa-logger";
import {router} from "./routes/routes"
import {config} from "./config"
const serve = require('koa-static');
const path = require('path');

const app = new Koa();


app.use(serve(path.join(__dirname, '/public')));
const PORT = config.port;

// app.use(bodyParser());
app.use(
  cors({
    origin: "*"
  })
);
app.use(body({
  formidable:{
              uploadDir: './uploads',
              keepExtensions:true
            },   
  multipart: true
}));
app.use(logger());
app.use(router.routes());

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on("error", (err: Error) => {
    console.error(err);
  });

export default server;