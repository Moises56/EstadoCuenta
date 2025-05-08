export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  fullName: string;
  role: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface JwtPayload {
  sub: string;
  username: string;
  role: string;
}

export interface UserResponse {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: string;
}