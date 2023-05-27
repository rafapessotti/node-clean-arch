export type ExecuteOutput = {
  id: number;
  name: string;
  description: string;
};

export interface IGetAllCategory {
  execute(): Promise<ExecuteOutput[]>;
}
