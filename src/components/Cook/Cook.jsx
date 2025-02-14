import { useState } from "react";
import Prepare from "../Prepare/Prepare";
import PropTypes from "prop-types";
import ReadyCook from "../ReadyCook/ReadyCook";

const Cook = ({ cook }) => {
  const [insteadCook, setInsteadCook] = useState([]);
  const preparingBtn = (currentCook) => {
    console.log(currentCook);
    const selectAlready = insteadCook.find(
      (c) => c.recipe_id == currentCook.recipe_id
    );
    if (!selectAlready) {
      const newInsteadCook = [...insteadCook, currentCook];
      setInsteadCook(newInsteadCook);
      // toast.success("Currently Cooking");
    } else {
      //  toast.error("Cooked");
    }
  };

  return (
    <main className="w-full lg:w-2/5 p-4 lg:p-0">
      <div className="border-2 rounded-3xl p-6">
        <h2 className="text-2xl font-bold text-center mt-8">
          Want to Cook: {cook.length}
        </h2>
        <div className="divider w-3/4 mx-auto"></div>
        <div>
          <div className="overflow-x-auto"></div>
          <div className="overflow-x-auto">
            <table className="table mt-">
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
            <Prepare key={idx} prep={ck} preparingBtn={preparingBtn} />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-center mt-8">
          Currently cooking: {insteadCook.length}
        </h2>
        <div className="divider w-3/4 mx-auto"></div>
        <div className="overflow-x-auto">
          <table className="table mt-">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="w-4/12 mx-auto">Name</th>
                <th className="w-4/12">Times</th>
                <th className="w-4/12">Calories</th>
              </tr>
            </thead>
          </table>
        </div>
        {insteadCook.map((rc, idx) => (
          <ReadyCook rc={rc} key={idx} preparingBtn={preparingBtn} />
        ))}
        <div className="flex justify-end gap-8"> 
          <h2 className="text-xl font-bold">
            Total Time:{" "}
            {insteadCook.reduce((totalMinutes, currentItem) => {
              const timeString = currentItem.preparing_time;
              const numericValue = parseInt(timeString.split(" ")[0]);

              const unit = timeString.split(" ")[1];
              const minutes =
                unit === " minutes" ? numericValue : numericValue;

              return totalMinutes + minutes;
            }, 0)}
            minutes
          </h2>

          <h2 className="text-xl font-bold">
            Total Calories:{" "}
            {insteadCook.reduce(
              (totalCalories, currentItem) =>
                totalCalories + currentItem.calories,
              0
            )}{" "}
            calories
          </h2>
        </div>
      </div>
    </main>
  );
};
Cook.propTypes = {
  cook: PropTypes.array,
  preparingBtn: PropTypes.func,
};
export default Cook;
