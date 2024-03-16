import Prepare from "../Prepare/Prepare";
import PropTypes from 'prop-types'
const Cook = ({ cook }) => {
  return (
    <main className="w-full lg:w-2/5">
      <div className="border-2 rounded-3xl">
      <h2 className="text-2xl font-bold text-center mt-8">
        Want to Cook: {cook.length}
      </h2>
      <div className="divider w-3/4 mx-auto"></div>
      <div>
        <div className="overflow-x-auto"></div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="w-4/12 mx-auto">Name</th>
                <th className="w-2/12">Times</th>
                <th className="w-3/12">Calories</th>
                <th className="w-3/12"></th>
              </tr>
            </thead>
          </table>
        </div>
        {cook.map((ck, idx) => (
          <Prepare key={idx} prep={ck} />
        ))}
      </div>
      <h2 className="text-2xl font-bold text-center">
        Currently Cooking: {cook.length}
      </h2>
      </div>
      
    </main>
  );
};
Cook.propTypes = {
    cook:PropTypes.array,
}
export default Cook;
