import { useState, useEffect } from "react";
import axios from "axios";

function SuperHeroPage() {
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:4001/superheroes").then((res)=>{
      setData(res.data);
      setLoading(false)
      
    }).catch((err)=>{
      setError(err.message);
      setLoading(false)
    })
  }, []);

  if(Loading){
    return <div>Loading...</div>;
  }
  if(error){
    return <h2>{error}</h2>
  }

  const mappedData=Data.map((dat)=>{
    return <ul key={dat.id}>
        <li>{dat.name}
            <li>{dat.alterEgo}</li>
        </li>
    </ul>

  })

  return <div>
    {mappedData}

  </div>;
}

export default SuperHeroPage;
