import { Category } from "../../entities/category";

export interface IGetAllCategory {
  execute(): Category[];
}
