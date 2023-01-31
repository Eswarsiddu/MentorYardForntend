import { User, UserCredential } from "firebase/auth";
export interface AuthContextInterface {
  currentUser: User | null | undefined;
  login: (
    email: string,
    password: string,
    type: string
  ) => Promise<UserCredential | void>;
  register: (
    email: string,
    password: string,
    fullName: string,
    type: string
  ) => Promise<UserCredential | void>;
  logout: () => Promise<void>;
  updateDisplayName: (fullName: string) => Promise<void>;
  updateEmailAddress: (email: string) => Promise<void>;
}
