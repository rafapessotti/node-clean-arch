import { GetAllCategoryUseCase } from "../../application/use-cases/category/get-all-category";
import { IGetAllCategory } from "../../domain/use-cases/category/get-all-category";
import { CategoryPG } from "../repository/category-pg";

export function GetAllCategoryFactory(): IGetAllCategory {
  const categoryInMemory = new CategoryPG();
  const useCase = new GetAllCategoryUseCase(categoryInMemory);
  return useCase;
}
