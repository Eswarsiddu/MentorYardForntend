import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updateProfile,
  User,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextInterface } from "../types/AutheContextInterface";
import { GetRole } from "../utils/BackEndRequests";
import { auth } from "../utils/FireBaseConfig";

const AuthContext = createContext<AuthContextInterface>({
  currentUser: undefined,
  role: null,
  login: (email: string, password: string) => Promise.resolve(),
  register: (
    email: string,
    password: string,
    fullName: string,
    _role: string
  ) => Promise.resolve(),
  logout: () => Promise.resolve(),
  updateDisplayName: (fullName: string) => Promise.resolve(),
  updateEmailAddress: (email: string) => Promise.resolve(),
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );
  const [role, setRole] = useState<string | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      const gettingRole = await GetRole(user?.uid as string);
      console.log("getting role", gettingRole);
      if (user && !role) {
        setRole(gettingRole);
      }
      console.log("setting current user");
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const contextValue = {
    currentUser,
    role,
    register: (
      email: string,
      password: string,
      fullName: string,
      _role: string
    ) =>
      createUserWithEmailAndPassword(auth, email, password).then((result) => {
        console.log("registred", { email, password, fullName });
        setRole(_role);
        return updateProfile(result.user, { displayName: fullName });
      }),
    login: (email: string, password: string) =>
      signInWithEmailAndPassword(auth, email, password),
    updateDisplayName: (fullName: string) =>
      updateProfile(currentUser!, { displayName: fullName }),
    updateEmailAddress: (email: string) => updateEmail(currentUser!, email),
    logout: () => {
      setRole(null);
      return signOut(auth);
    },
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
