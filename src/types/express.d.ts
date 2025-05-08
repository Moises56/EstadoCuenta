import { User } from './auth/dto/user.model';

declare global {
  namespace Express {
    // Extender la interfaz Request para incluir la propiedad user
    interface Request {
      user?: {
        id: string;
        username: string;
        role: string;
      };
    }
  }
}