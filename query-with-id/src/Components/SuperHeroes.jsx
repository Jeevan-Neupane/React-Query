import { Link } from 'react-router-dom';
import useSuperHeroData from '../hooks/useSuperHeroData'

function SuperHeroes() {
    const {isLoading,isFetching,data} = useSuperHeroData();

    
    if(isFetching || isLoading){
        return <div className='bg-slate-600 p-3 mt-3 text-white text-2xl cursor-pointer rounded-xl block'>Loading...</div>
    }
    const renderedData=data?.data.map((hero)=>{
        return (
            <Link  key={hero.id} className='bg-slate-600 p-3 mt-3 text-white text-2xl cursor-pointer rounded-xl block' to={`${hero.id}`}>{hero.name}</Link>
        )

    })
    

  return (
    <div>
        {renderedData}
      
    </div>
  )
}

export default SuperHeroes
