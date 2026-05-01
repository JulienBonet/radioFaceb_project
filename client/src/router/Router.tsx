import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Grille from "../pages/Grille";
import CommentEcouter from "../pages/CommentEcouter";
import Contact from "../pages/Contact";
import Historique from "../pages/Historique";
import Mixtapes from "../pages/Mixtapes";
import Presentation from "../pages/Presentation";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/grille" element={<Grille />} />
      <Route path="/comment_ecouter" element={<CommentEcouter />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/historique" element={<Historique />} />
      <Route path="/mixtapes" element={<Mixtapes />} />
      <Route path="/presentation" element={<Presentation />} />
    </Routes>
  );
}
