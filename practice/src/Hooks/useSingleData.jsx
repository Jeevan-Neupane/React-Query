import { useQuery } from "react-query";
import axios from "axios";

 const fetchSuperHero = (id) => {
 return axios.get(`http://localhost:4005/superHero/${id}`);

};

export  const superHeroData=(heroID)=>{
    return useQuery(['super-hero',heroID],()=>fetchSuperHero(heroID));
}


