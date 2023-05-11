import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero = () => {
  return axios.get("http://localhost:4001/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4001/friends");
};

function ParallelQuiries() {
   const {data:superHeroes,isLoading:isSuperHeroLoad}= useQuery("super-heroes",fetchSuperHero);
   const {data:friends,isLoading:isFriendLoad}=useQuery("friends",fetchFriends);

  const renderedListOfHeroes=superHeroes?.data.map((hero)=>{
    return (
        <div className="bg-slate-800 text-lg font-semibold text-white p-4 mt-2 rounded-lg">{hero.name}</div>
    )
  })
  const renderedListOfFriends=friends?.data.map((friend)=>{
    return (
        <div className="bg-slate-800 text-lg font-semibold text-white p-4 mt-2 rounded-lg">{friend.name}</div>
    )
  })






  return <div>
    <h2 className="text-center text-3xl font-bold">Parallel Quiries</h2>
    {renderedListOfHeroes}
    {renderedListOfFriends}
  </div>;
}

export default ParallelQuiries;
