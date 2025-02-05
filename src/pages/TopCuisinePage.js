import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import TopList from "../components/TopList";
import GenericPageTitle from "../components/GenericPageTitle";
import BackButton from "../components/BackButton";


//import needed components

import { useState, useEffect } from "react";

export default function TopCuisinePage() {
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = () => {
    axios
      .get(`http://localhost:5000/api/recipe/topCuisine`)
      .then((response) => setRecipes(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <div>
      <Link to="/"><BackButton/></Link>
      <GenericPageTitle text="TOP CUISINE" />
      <TopList recipes={recipes} />
    </div>
  );
}


