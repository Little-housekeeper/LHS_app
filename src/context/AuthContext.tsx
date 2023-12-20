import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  User,
  RecaptchaVerifier,
  FacebookAuthProvider,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  // const navigate = useNavigate();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        // navigate("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setUserHandler = (userInfo) => {
    setUser(userInfo);
  }

  const logOut = () => {
    signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser == null || currentUser.email == null) {
        setUser(null);
      } else {
        setUser(currentUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ googleSignIn, logOut, facebookSignIn, setUserHandler, user}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
