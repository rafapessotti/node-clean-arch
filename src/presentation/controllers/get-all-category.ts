import { GetAllCategoryFactory } from "../../infra/factorys/get-all-category";
import { OutputGetAllCategory } from "../response/output-get-all-category";

export class GetAllCategory {
  async execute(): Promise<OutputGetAllCategory[]> {
    const useCase = GetAllCategoryFactory();
    const response = await useCase.execute();
    return response;
  }
}
