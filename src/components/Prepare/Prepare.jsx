import PropTypes from "prop-types";

const Prepare = ({ prep,preparingBtn }) => {
  const { recipe_id, name, preparing_time, calories } = prep;

  return (
    <main>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody >
            <tr >
              <th>{recipe_id}</th>
              <td className="w-4/12">{name}</td>
              <td className="w-2/12">{preparing_time}</td>
              <td className="w-3/12">{calories} Calories</td>
              <td className="w-3/12">
                <button className="btn bg-[#0BE58A] rounded-3xl" onClick={()=>preparingBtn(prep)}>
                  Preparing
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};
Prepare.propTypes = {
  prep: PropTypes.array,
  preparingBtn:PropTypes.func,
};
export default Prepare;
