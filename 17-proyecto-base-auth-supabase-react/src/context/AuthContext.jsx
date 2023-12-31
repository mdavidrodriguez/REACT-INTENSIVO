import { useEffect, useState } from "react";
import { createContext } from "react";
import { supabase } from "../supabase/supabase.config";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
  const [user, setUser] = useState([]);

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error)
        throw new Error("A ocurrido un error durante la autenticación");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
    if (error)
      throw new Error("A ocurrido un error durante el cierre de sesión");
  }
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("supabase sessión: ", event);
        if (session === null) {
          navigate("/login", { replace: true });
        } else {
          setUser(session?.user.user_metadata);
          console.log("data del usuario", session?.user.user_metadata);
          navigate("/", { replace: true });
        }
      }
    );
    return () => {
        authListener.subscription;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signInWithGoogle, signout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
