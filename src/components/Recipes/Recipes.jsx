import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(`Recipes.json`)
      .then((resp) => resp.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <main className="grid grid-cols-2 w-3/5 mx-auto gap-4">
      {recipes.map((recipes, idx) => (
        <Recipe key={idx} rcips={recipes} />
      ))}
    </main>
  );
};

export default Recipes;
