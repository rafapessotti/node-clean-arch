export type ExecuteInput = {
  name: string;
  description: string;
  id: number;
};

export interface IUpdateCategory {
  execute(input: ExecuteInput): Promise<void>;
}
