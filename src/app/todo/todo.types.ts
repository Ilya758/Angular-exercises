export interface ITodo {
  id: number;
  data: string;
  completed: boolean;
  isEdited: boolean;
}

export type TTodos = [] | ITodo[];
