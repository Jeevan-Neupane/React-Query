import { useQuery } from "react-query";
import axios from "axios";

const FetchData = () => {
  return axios.get("http://localhost:4001/superheroes");
};

function useSuperHeroData() {
  return useQuery("super-heroes", FetchData, {});
}

export default useSuperHeroData;
