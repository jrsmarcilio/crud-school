export interface IStudentRequest {
  id?: number;
  name: string;
  email: string;
  course: string;
}

export interface IUserRequest {
  id?: number;
  name: string;
  username: string;
  password: string;
  email: string;
  is_active?: boolean;
}

export interface MailDTO {
  email: string;
  subject: string;
  to: string;
  html: string;
}
