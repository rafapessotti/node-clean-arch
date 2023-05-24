export type ExecuteInput = {
  name: string;
  description: string;
};

export type ExecuteOutput = {
  id?: number;
  name: string;
  description: string;
};

export interface ICreateCategory {
  execute(input: ExecuteInput): ExecuteOutput;
}
