import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create-recipe">Create Recipe</Link>
      <Link to="/saved-recipe">Saved recipe</Link>
      <Link to="/auth">Login/Register</Link>
    </div>
  );
}
