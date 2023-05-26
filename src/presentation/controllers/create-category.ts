import { CreateCategoryFactory } from "../../infra/factorys/create-category";
import { InputCreateCategory } from "../request/input-create-category";
import { OutputCreateCategory } from "../response/output-create-category";

export class CreateCategory {
  execute(inputCreateCategory: InputCreateCategory): OutputCreateCategory {
    if (!inputCreateCategory.name) {
      throw new Error("Nome inválido");
    }
    if (!inputCreateCategory.description) {
      throw new Error("Descrição inválida");
    }
    const useCase = CreateCategoryFactory();
    const response = useCase.execute(inputCreateCategory);
    return response;
  }
}
