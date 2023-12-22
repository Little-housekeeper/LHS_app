import { useContext, createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  getAuth,
  getIdTokenResult,
  User,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { postCustomer } from "../utils/ApiUtils.js";

interface AuthContextValue {
  googleSignIn: () => void;
  logOut: () => void;
  facebookSignIn: () => void;
  setUserHandler: (userInfo: any) => void;
  user: User | null;
  role: string | null; // Add role to the context
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null); // Role state

  // Helper function to fetch role from custom claims
  const fetchRole = async (currentUser: User) => {
    const tokenResult = await getIdTokenResult(currentUser);
    setRole(tokenResult.claims.role || null); // Set role from custom claims
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        fetchRole(res.user); // Fetch role after signing in
        postCustomer(res.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        fetchRole(result.user); // Fetch role after signing in
        postCustomer(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setUserHandler = (userInfo: any) => {
    setUser(userInfo);
    if (userInfo) fetchRole(userInfo); // Fetch role when setting user
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setRole(null); // Reset role on sign out
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchRole(currentUser); // Fetch role on auth state change
      } else {
        setUser(null);
        setRole(null); // Reset role if not signed in
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        logOut,
        facebookSignIn,
        setUserHandler,
        user,
        role, // Provide role in context
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
