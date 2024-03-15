import PropTypes from "prop-types";
import clock from "../../assets/icon/clock.svg";
import calorie from "../../assets/icon/calorie.svg";
import Ingredients from "../Ingredients/Ingredients";

const Recipe = ({ rcips }) => {
  const { image, name, description, preparing_time, calories, ingredients } = rcips;
  const ingredientList = ingredients.list; // Accessing the list array
  const ingredientLength = ingredients.length;
  return (
    <main>
      <div className="card w-full bg-base-100 shadow-xl">
        <img className="h-[280px]" src={image} alt="" />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="divider"></div>
          <p>Ingredients: {ingredientLength}</p>
          <div>
            {ingredientList.map((ingredient, idx) => (
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
            <button className="btn bg-[#0BE58A] rounded-3xl mt-4">Want to Cook</button>
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
};

export default Recipe;
