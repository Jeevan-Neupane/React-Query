import axios from 'axios';
import {useQuery} from 'react-query';

const FetchData= ()=>{
    return  axios.get(" http://localhost:4005/superHero")

}
function useData(){
    return useQuery('super-hero',FetchData,{
        
    });
}

export default useData;