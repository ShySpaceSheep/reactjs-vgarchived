import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { supabase } from "./utils/supabase-client";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Games from "./pages/Games";
import Forums from "./pages/Forums";
import List from "./pages/List";
import { AuthProvider } from "./utils/auth-context";
import Game from "./pages/Game";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:gameId" element={<Game />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/list" element={<List />} />
          <Route path="/list/:userId" element={<List />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
