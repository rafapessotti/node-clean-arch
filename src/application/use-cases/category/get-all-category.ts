import {
  ExecuteOutput,
  IGetAllCategory,
} from "../../../domain/use-cases/category/get-all-category";
import { ICategoryRepository } from "../../repository/category-repository";

export class GetAllCategoryUseCase implements IGetAllCategory {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(): Promise<ExecuteOutput[]> {
    const response = await this.categoryRepository.getall();

    return response.map((item) => ({
      id: item.getId,
      name: item.getName,
      description: item.getDescription,
    }));
  }
}
