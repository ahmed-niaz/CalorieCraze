import Prepare from "../Prepare/Prepare";

const Cook = ({cook}) => {
    
  return (
    <main className="w-2/5 border-2 border-green-500">
      <h2 className="text-2xl font-bold text-center">Want to Cook: {cook.length}</h2>
      <div className="divider w-3/4 mx-auto"></div>
      <div>
        <div className="overflow-x-auto"></div>
        <div className="overflow-x-auto">
        {
        cook.map((ck,idx)=> <Prepare key={idx} prep={ck}/>)
      }
</div>
      </div>
    </main>
  );
};

export default Cook;
