export interface Chart {
  id: string;
  name: string;
  type: string;
  color: string;
  data: { value: number; date: Date }[];
}
