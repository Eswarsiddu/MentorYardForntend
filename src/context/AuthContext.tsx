import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updateProfile,
  User,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextInterface } from "../types/AutheContextInterface";
import { auth } from "../utils/FireBaseConfig";

const AuthContext = createContext<AuthContextInterface>({
  currentUser: undefined,
  login: (email: string, password: string) => Promise.resolve(),
  register: (email: string, password: string, fullName: string) =>
    Promise.resolve(),
  logout: () => Promise.resolve(),
  updateDisplayName: (fullName: string) => Promise.resolve(),
  updateEmailAddress: (email: string) => Promise.resolve(),
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const contextValue = {
    currentUser,
    register: (email: string, password: string, fullName: string) =>
      createUserWithEmailAndPassword(auth, email, password).then((result) =>
        updateProfile(result.user, { displayName: fullName })
      ),

    login: (email: string, password: string) =>
      signInWithEmailAndPassword(auth, email, password),
    updateDisplayName: (fullName: string) =>
      updateProfile(currentUser!, { displayName: fullName }),
    updateEmailAddress: (email: string) => updateEmail(currentUser!, email),
    logout: () => signOut(auth),
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
