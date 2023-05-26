import {
  ExecuteOutput,
  IGetAllCategory,
} from "../../../domain/use-cases/category/get-all-category";
import { ICategoryRepository } from "../../repository/category-repository";

export class GetAllCategoryUseCase implements IGetAllCategory {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  execute(): ExecuteOutput[] {
    const response = this.categoryRepository.getall();

    return response.map((item) => ({
      id: item.getId,
      name: item.getName,
      description: item.getDescription,
    }));
  }
}
