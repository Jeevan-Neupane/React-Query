import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4001/superheroes/${heroId}`);
};

function DyanamicParallel({ heroIds }) {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  console.log(queryResult);

  return <div></div>;
}

export default DyanamicParallel;
