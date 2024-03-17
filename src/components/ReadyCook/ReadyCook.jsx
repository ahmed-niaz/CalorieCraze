import PropTypes from 'prop-types'

const ReadyCook = ({rc}) => {
    const {name,preparing_time,calories} = rc;
    
    return (
        <main>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody >
            <tr >
              <td className="w-4/12">{name}</td>
              <td className="w-4/12">{preparing_time}</td>
              <td className="w-4/12">{calories} Calories</td>
             
            </tr>
          </tbody>
        </table>
      </div>
    </main>
    );
};

ReadyCook.propTypes = {
    rc:PropTypes.array,
}

export default ReadyCook;