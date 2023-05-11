import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const FetchData = ({ queryKey }) => {
  const heroId = queryKey[1];

  return axios.get(`http://localhost:4001/superheroes/${heroId}`);
};

function useData(heroId) {
  const queryClient = useQueryClient();
  // console.log(queryClient.getQueryData("super-heroes")?.data?.find((hero)=>hero.id===parseInt(heroId)));

  return useQuery(["super-hero", heroId], FetchData, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
}

export default useData;
