export interface IOrder {
  id?: number;
  name?: string | null;
  date?: string | null;
  price?: string | null;
}

export const defaultValue: Readonly<IOrder> = {};
