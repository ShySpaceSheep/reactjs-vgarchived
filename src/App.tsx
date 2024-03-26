import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Games from "./pages/Games";
import Forums from "./pages/Forums";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/games" element={<Games />} />
        <Route path="/forums" element={<Forums />} />
      </Routes>
    </BrowserRouter>
  );
}
