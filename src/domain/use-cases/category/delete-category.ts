export type ExecuteInput = {
  id: number;
};

export interface IDeleteCategory {
  execute(input: ExecuteInput): Promise<void>;
}
