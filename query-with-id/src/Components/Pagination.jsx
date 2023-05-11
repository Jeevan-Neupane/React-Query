import { useQuery } from "react-query"
import axios from "axios"
import { useState } from "react";

const fetchColor=(pageNo)=>{
    return axios.get(`http://localhost:4001/colors?_limit=2&_page=${pageNo}`);
}

function Pagination() {
    const [pageNo, setPageNo] = useState(1)
    const {data,isError,isLoading,isFetching,error}=useQuery(["color",pageNo],()=>fetchColor(pageNo),{
        keepPreviousData:true,

    });

    if(isLoading ){
        return <div>Loading...</div>
    }
    
    if(isError){
        return <div>{error}</div>

    }

    const renderedColorList=data?.data?.map((color)=>{
        return (
           <p key={color.id} style={{backgroundColor:`${color.label}`}} className="p-2 text-2xl text-white mt-3 rounded-lg">{color.label}</p>
        )
    })
  return (
    <div>
        {renderedColorList}
        <div className="flex justify-center mt-5 gap-4">
            <button onClick={()=>setPageNo(pageNo-1)} className="bg-cyan-700 p-3 text-white text-lg" disabled={pageNo===1}>Decrease</button>
            <button onClick={()=>setPageNo(pageNo+1)} className="bg-cyan-700 p-3 text-white text-lg" disabled={pageNo===4}>Increase</button>
            
        </div>
      
    </div>
  )
}

export default Pagination
