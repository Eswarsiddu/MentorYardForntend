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
import RolesEnum from "../types/RolesEnum";
import {
  addMentee,
  addMentor,
  getMenteeByFuid,
  getMentorByFuid,
  getRole,
} from "../utils/BackendRequests";
import { auth } from "../utils/FireBaseConfig";
import ROLES from "../types/RolesEnum";

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
  bioDetails: {},
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );
  const [role, setRole] = useState<string | null | undefined>(null);
  const [bioDetails, setBioDetails] = useState<any>({});
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const gettingRole = await getRole(user.uid);
        console.log("getting role", gettingRole);
        const data = await (gettingRole == ROLES.MENTEE
          ? getMenteeByFuid
          : getMentorByFuid)(user!.uid);
        console.log("bio data", data);
        if (data) {
          if (data.address) {
            console.log("has address");
            setBioDetails(data);
          } else {
            console.log("no address");
          }
        }
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
          if (_role == RolesEnum.MENTEE) {
            await addMentee(auth.currentUser!.uid, fullName, email);
          } else {
            await addMentor(auth.currentUser!.uid, fullName, email);
          }
          // await CreateUser(email, fullName, _role, auth.currentUser!.uid);
          updateProfile(result.user, { displayName: fullName });
          // setRole(_role);
          setRole(null);
          await signOut(auth);
        }
      ),
    login: async (email: string, password: string) => {
      await signInWithEmailAndPassword(auth, email, password);
      const uid = auth.currentUser!.uid;
      const gettingRole = await getRole(uid);
      if (gettingRole) {
        setRole(gettingRole);
      } else {
        await signOut(auth);
      }
    },
    updateDisplayName: (fullName: string) =>
      updateProfile(currentUser!, { displayName: fullName }),
    updateEmailAddress: (email: string) => updateEmail(currentUser!, email),
    logout: () => {
      setRole(null);
      return signOut(auth);
    },
    bioDetails,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
