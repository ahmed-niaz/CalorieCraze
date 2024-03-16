import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
const Recipes = ({handleWantToCook}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(`Recipes.json`)
      .then((resp) => resp.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <main className="grid grid-cols-1 w-full lg:grid-cols-2 lg:w-3/5 mx-auto gap-4">
      {recipes.map((recipes, idx) => (
        <Recipe key={idx} rcips={recipes} handleWantToCook={handleWantToCook}/>
      ))}
    </main>
  );
};

export default Recipes;
