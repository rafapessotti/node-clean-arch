import { DeleteCategoryUseCase } from "../../application/use-cases/category/delete-category";
import { IDeleteCategory } from "../../domain/use-cases/category/delete-category";
import { CategoryPG } from "../repository/category-pg";

export function DeleteCategoryFactory(): IDeleteCategory {
  const categoryDelete = new CategoryPG();
  const useCase = new DeleteCategoryUseCase(categoryDelete);
  return useCase;
}
