import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { supabase } from "./../utils/supabase-client";

type AuthContextType = {
  user: any;
  userDetails: any;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [userDetails, setUserDetails] = useState<any>(null);

  useEffect(() => {
    // Get the current session
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);

      if (session?.user) {
        fetchUserDetails(session.user.id);
      }
    };

    getSession();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);

      if (session?.user) {
        fetchUserDetails(session.user.id);
      } else {
        setUserDetails(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchUserDetails = async (userId: string) => {
    const { data, error } = await supabase
      .from("users") // Replace with your table name
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Error fetching user details:", error.message);
    } else if (data) {
      setUserDetails(data);
    } else {
      console.error("No user found with the given ID");
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUserDetails(null);
  };

  return (
    <AuthContext.Provider value={{ user, userDetails, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
