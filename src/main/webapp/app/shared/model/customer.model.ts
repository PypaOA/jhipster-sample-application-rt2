export interface ICustomer {
  id?: number;
  name?: string | null;
  surName?: string | null;
  money?: number | null;
}

export const defaultValue: Readonly<ICustomer> = {};
