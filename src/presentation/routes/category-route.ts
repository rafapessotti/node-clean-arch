//import { Router, Request, Response } from "express";
import Router from "koa-router";

import { CreateCategory } from "../controllers/create-category";
import { GetAllCategory } from "../controllers/get-all-category";
import { DeleteCategory } from "../controllers/delete-category";
import { UpdateCategory } from "../controllers/update-category";

export const route = new Router();

route.post("/", async (ctx) => {
  const createCategory = new CreateCategory();
  const response = await createCategory.execute(ctx.request.body as any);
  // res.json(JSON.stringify(response));
  ctx.body = response;
});

route.delete("/:id", async (ctx) => {
  const deleteCategory = new DeleteCategory();
  // const category = {
  //   id: parseInt(req.params.id),
  // };

  await deleteCategory.execute({
    id: parseInt(ctx.params.id),
  });
  ctx.status = 204;
});

route.put("/:id", async (ctx) => {
  const updateCategory = new UpdateCategory();

  const body = ctx.request.body as any;

  await updateCategory.execute({
    id: parseInt(ctx.params.id),
    name: body.name,
    description: body.description,
  });
  ctx.status = 204;
});

route.get("/", async (ctx) => {
  const getallCategory = new GetAllCategory();
  const response = await getallCategory.execute();
  ctx.body = response;
});
