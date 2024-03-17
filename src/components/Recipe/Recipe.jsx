import PropTypes from "prop-types";
import clock from "../../assets/icon/clock.svg";
import calorie from "../../assets/icon/calorie.svg";
import Ingredients from "../Ingredients/Ingredients";


const Recipe = ({ rcips,handleWantToCook}) => {
  const { image, name, description, preparing_time, calories, ingredients } = rcips;
  const ingredientList = ingredients.list; 
  const ingredientLength = ingredients.length;
  return (
    <main>
      <div className="card w-full bg-base-100 shadow-xl border-2 ">
        <img className="h-[280px] rounded-3xl p-4" src={image} alt="" />
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="text-[#878787] w-full lg:w-3/4">{description}</p>
          <div className="divider"></div>
          <p className="font-bold text-2xl">Ingredients: {ingredientLength}</p>
          <div>
            {ingredientList.slice(0,3).map((ingredient, idx) => (
              <Ingredients key={idx} ingredientList={ingredient} />
            ))}
          </div>

          <div className="divider"></div>
          <div className="flex gap-8">
            <div className="flex gap-2">
              <img src={clock} alt="" />
              <p>{preparing_time}</p>
            </div>
            <div className="flex gap-2">
              <img src={calorie} alt="" />
              <p>{calories} calories</p>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button className="btn bg-[#0BE58A] rounded-3xl mt-4" onClick={()=>handleWantToCook(rcips)}>Want to Cook</button>
          </div>
        </div>
      </div>
    </main>
  );
};

Recipe.propTypes = {
  rcips: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    preparing_time: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  handleWantToCook:PropTypes.func,
  handleRecipeSelection:PropTypes.func,
};

export default Recipe;
