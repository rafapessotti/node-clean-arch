import * as dotenv from "dotenv";
dotenv.config();
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { route } from "./presentation/routes/category-route";
import { errorHandler } from "./infra/middlewares/error-handler";

const app = new Koa();

app.use(errorHandler);
app.use(bodyParser());

// app.use(async (ctx, next) => {
//   return next().catch((err) => {
//     const error = err as any;

//     if (!error?.code) {
//       ctx.status = 500;
//       ctx.body = { code: 500, message: "Erro inesperado." };
//       ctx.app.emit("error", err, ctx);
//       return;
//     }

//     ctx.body = { code: error.code, message: error.message };
//     ctx.status = error.code;

//     ctx.app.emit("error", err, ctx);
//   });
// });

app.use(route.routes()).use(route.allowedMethods());
const port = 3000;

// app.on("error", async (err, ctx) => {
//   const error = err as any;
//   ctx.throw(500, "TESTE da silva sauro");
//   if (!error?.code) {
//     ctx.status = 500;
//     ctx.body = { code: 500, message: "Erro inesperado." };
//     return;
//   }

//   ctx.body = { code: error.code, message: error.message };
//   ctx.status = error.code;
// });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
