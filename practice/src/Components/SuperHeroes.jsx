
import { Link, Outlet } from "react-router-dom";
import useData from "../Hooks/useData"


 function SuperHeroes() {
 

    const {isLoading,data,refetch,isFetching}=  useData();

    if(isLoading || isFetching){
        return <div className="h-screen">Loading ...</div>
    }
    
    const mappedData=data?.data.map((hero)=>{
        return <Link key={hero.name} to={hero.id}  className="px-4">{hero.name}</Link>
    })

  
   console.log(mappedData)
  return (
    
    <div className="h-screen">
       

        {data && mappedData}

        <div className="py-10 mx-4 text-center text-3xl">
          <Outlet/>
        </div>
        
        
       

       
     
        
      
    </div>
  )
}

export default SuperHeroes
