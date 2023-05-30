import { Category } from "../../domain/entities/category";

export type ExecuteInputID = {
  id: number;
};

export interface ICategoryRepository {
  create(category: Category): Promise<Category>;
  getall(): Promise<Category[]>;
  delete(inputID: ExecuteInputID): Promise<void>;
  update(category: Category): Promise<void>;
  getByID(inputID: ExecuteInputID): Promise<Category | null>;
}
