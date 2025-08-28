export interface CreateUserRequest {
  name: string;
  lastName: string;
  email: string;
  document_number: string;
  phone_number: string;
  amount: number;
}

export interface GetUser {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  document_number: string;
  phone_number: string;
  amount: number;
}

