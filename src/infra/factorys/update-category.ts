import { UpdateCategoryUseCase } from "../../application/use-cases/category/update-category";
import { IUpdateCategory } from "../../domain/use-cases/category/update-category";
import { CategoryPG } from "../repository/category-pg";

export function UpdateCategoryFactory(): IUpdateCategory {
  const categoryUpdate = new CategoryPG();
  const useCase = new UpdateCategoryUseCase(categoryUpdate);
  return useCase;
}
