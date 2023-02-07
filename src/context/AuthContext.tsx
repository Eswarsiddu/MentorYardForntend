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
import { CreateUser, GetRole } from "../utils/BackEndRequests";
import { auth } from "../utils/FireBaseConfig";

const AuthContext = createContext<AuthContextInterface>({
  currentUser: undefined,
  role: null,
  login: (email: string, password: string, _role: string) => Promise.resolve(),
  register: (
    email: string,
    password: string,
    fullName: string,
    _role: string
  ) => Promise.resolve(),
  logout: () => Promise.resolve(),
  updateDisplayName: (fullName: string) => Promise.resolve(),
  updateEmailAddress: (email: string) => Promise.resolve(),
  setProfileImage: (imageUrl: string) => {},
  profileImage: "",
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );
  const [role, setRole] = useState<string | null | undefined>(null);
  const [profileImage, setProfileImage] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const gettingRole = await GetRole(user.uid);
        console.log("getting role", gettingRole);
        setRole(gettingRole);
      }
      setCurrentUser(user);
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
      createUserWithEmailAndPassword(auth, email, password).then(
        async (result) => {
          await CreateUser(email, fullName, _role, auth.currentUser!.uid);
          setRole(_role);
          return updateProfile(result.user, { displayName: fullName });
        }
      ),
    login: (email: string, password: string, _role: string) => {
      return signInWithEmailAndPassword(auth, email, password).then(
        async () => {
          const uid = auth.currentUser!.uid;
          const gettingRole = await GetRole(uid);
          if (gettingRole != _role) {
            await signOut(auth);
            setRole(undefined);
            return false;
          }
          setRole(gettingRole);
          return true;
        }
      );
    },
    updateDisplayName: (fullName: string) =>
      updateProfile(currentUser!, { displayName: fullName }),
    updateEmailAddress: (email: string) => updateEmail(currentUser!, email),
    logout: () => {
      setRole(null);
      return signOut(auth);
    },
    setProfileImage: (url: string) => {
      setProfileImage(url);
    },
    profileImage,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
