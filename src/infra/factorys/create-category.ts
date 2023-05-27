import { CreateCategoryUseCase } from "../../application/use-cases/category/create-category";
import { ICreateCategory } from "../../domain/use-cases/category/create-category";
import { CategoryPG } from "../repository/category-pg";

export function CreateCategoryFactory(): ICreateCategory {
  const categoryInMemory = new CategoryPG();
  const useCase = new CreateCategoryUseCase(categoryInMemory);
  return useCase;
}
