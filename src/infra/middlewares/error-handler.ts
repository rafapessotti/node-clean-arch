import * as Koa from 'koa';

export const errorHandler = async (
  ctx: Koa.Context,
  next: Koa.Next
) => {
  return next().catch((err) => {
    const error = err as any;

    if (!error?.code) {
      ctx.status = 500;
      ctx.body = { code: 500, message: "Erro inesperado." };
      ctx.app.emit("error", err, ctx);
      return;
    }

    ctx.body = { code: error.code, message: error.message };
    ctx.status = error.code;

    ctx.app.emit("error", err, ctx);
  });
};