import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Recipes from "./components/Recipes/Recipes";
import Cook from "./components/Cook/Cook";
import { useState } from "react";

const App = () => {
  const [cook,setCook] = useState([]);
  const handleWantToCook = (ck) =>{
    const newCook = [...cook,ck]
    setCook(newCook)
  }
  return (
    <main className="container mx-auto font-lexend">
      <Navbar />
      <Banner />
      <div>
        <div className="flex flex-col items-center justify-center mt-28">
          <h2 className="text-4xl font-extrabold">Our Recipes</h2>
          <p className="w-3/5 text-center mt-4 text-sm font-bold">
            Delve into our exclusive culinary offering, where each recipe is
            meticulously crafted to tantalize your taste buds and elevate your
            cooking skills to new heights!
          </p>
        </div>
        <div className="mt-8 flex gap-4 flex-col lg:flex-row">
          <Recipes handleWantToCook={handleWantToCook}/>
          <Cook cook = {cook}/>
        </div>
      </div>
    </main>
  );
};

export default App;
