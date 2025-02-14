import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Recipes from "./components/Recipes/Recipes";
import Cook from "./components/Cook/Cook";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [cook, setCook] = useState([]);
  const handleWantToCook = (ck) => {
    console.log(ck);
    const selectAlready = cook.find((c) => (c.recipe_id === ck.recipe_id));

    if (!selectAlready) {
      const newCook = [...cook, ck];
      setCook(newCook);
      toast.success("Want to cook");
    }else{ 
      toast.warn("Already prepare for cooking");
    }
  };
  return (
    <main className="container mx-auto">
      <Navbar />
      <Banner />
      <div>
        <div className="flex flex-col items-center justify-center mt-28">
          <h2 className="text-4xl font-extrabold">Our Recipes</h2>
          <p className="w-full lg:w-3/5 text-center mt-4 text-sm font-bold">
            Delve into our exclusive culinary offering, where each recipe is
            meticulously crafted to tantalize your taste buds and elevate your
            cooking skills to new heights!
          </p>
        </div>
        <div className="mt-8 flex gap-4 flex-col lg:flex-row">
          <Recipes handleWantToCook={handleWantToCook} />
          <Cook cook={cook} />
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default App;
