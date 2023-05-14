import axios from "axios"
import { useMutation, useQuery } from "react-query";



const addSuperHero=(hero)=>{
    return axios.post("http://localhost:4000/superheroes",hero);
}
const getSuperHero=()=>{
    return axios.get("http://localhost:4000/superheroes")
}

export const useAddSuperHeroData=()=>{
    return useMutation(addSuperHero)

}
export const useGetSuperHero=()=>{
    return useQuery(["hero"],getSuperHero,{
        refetchInterval:3000,
    });
}