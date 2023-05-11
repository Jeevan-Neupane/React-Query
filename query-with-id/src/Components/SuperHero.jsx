import { useParams } from "react-router-dom";
import useData from "../hooks/useData";

function SuperHero() {
  const { heroId } = useParams();
 
  const { isLoading, isFetching, data, isError, error } = useData(heroId);
 

  if ( isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error}</h2>;
  }



  return (
    <div>
      <>
        <h2 className="text-center text-5xl ">{data?.data.name}</h2>
        <p className="mt-4 text-2xl">
          {data?.data.name}'s alterEgo is {data?.data.alterEgo}
        </p>
      </>
      
    </div>
  );
}

export default SuperHero;
