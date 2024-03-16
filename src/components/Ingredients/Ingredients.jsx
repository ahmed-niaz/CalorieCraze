import PropTypes from 'prop-types'

const Ingredients = ({ ingredientList }) => {
    console.log('ingredientList:', ingredientList); // Log received data
  
    return (
      <main>
        <ul >
          <li className='list-disc ml-8'>{ingredientList}</li>
        </ul>
      </main>
    );
  };
  Ingredients.propTypes = {
ingredientList: PropTypes.array,
  }
  export default Ingredients;
  