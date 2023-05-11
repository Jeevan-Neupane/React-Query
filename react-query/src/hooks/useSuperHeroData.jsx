
import { useQuery } from "react-query";
import axios from "axios";

const FetchData = () => {
  return axios.get("http://localhost:4001/superheroes");
};

function useSuperHeroData(onSuccess, onError) {
  return useQuery("super-heroes", FetchData, {
    // cacheTime:5000,//*isLoading =>True
    // staleTime:30000,//*isFetch =>True
    // refetchOnMount:false,
    // refetchOnWindowFocus:false,
    // refetchInterval:polling,
    // refetchIntervalInBackground:true,
    // enabled: false,
    onSuccess,
    onError,
    //   select: (data) => {
    //     const superHeroNames = data.data.map((hero) => {
    //       return hero.name;
    //     });
    //     return superHeroNames;
    //   },
  });
  
}

export default useSuperHeroData;
