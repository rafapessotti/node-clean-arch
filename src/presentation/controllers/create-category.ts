import { CreateCategoryFactory } from "../../infra/factorys/create-category";
import { InputCreateCategory } from "../request/input-create-category";
import { OutputCreateCategory } from "../response/output-create-category";

export class CreateCategory {
  async execute(
    inputCreateCategory: InputCreateCategory
  ): Promise<OutputCreateCategory> {
    if (!inputCreateCategory.name) {
      throw new Error("Nome inválido");
    }
    if (!inputCreateCategory.description) {
      throw new Error("Descrição inválida");
    }
    const useCase = CreateCategoryFactory();
    const response = await useCase.execute(inputCreateCategory);
    return response;
  }
}
