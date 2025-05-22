export interface User {
  id?: number;
  uuid: string;
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  created_at?: Date;
  updated_at?: Date;
}
