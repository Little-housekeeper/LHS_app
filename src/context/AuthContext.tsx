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
import { postCustomer } from "../utils/ApiUtils.js";

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
        postCustomer(res.user);
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
        postCustomer(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setUserHandler = (userInfo) => {
    setUser(userInfo);
  };

  const logOut = () => {
    signOut(auth);
    setUser(null);
    console.log("enters here");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("currentuser", currentUser)
      if (currentUser == null) {
        console.log("it goes here hah")
        setUser(null);
      } else {
        setUser(currentUser);
        console.log("it goes here hsdfsah")

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
