const Prepare = ({ prep }) => {
  const { recipe_id, name, preparing_time, calories } = prep;
  return (
    <main>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      
      <tr className="bg-base-200">
        <th>{recipe_id}</th>
        <td>{name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <button>Preparing</button>
      </tr>
    </tbody>
  </table>
</div>
    </main>
  );
};

export default Prepare;


