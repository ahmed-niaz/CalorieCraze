import PropTypes from 'prop-types'

const Ingredients = ({ ingredientList }) => {
    console.log(ingredientList);
    return (
      <main>
        <ul>
          
          {ingredientList}
        </ul>
      </main>
    );
  };
  

  
// Ingredients.propTypes = {
//     ingredientList:PropTypes.array
// }

export default Ingredients;