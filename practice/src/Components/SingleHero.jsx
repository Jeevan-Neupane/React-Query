import { useParams,useLoaderData } from "react-router-dom";

function SingleHero() {
  const {id}= useParams();
  const singleHero=useLoaderData();
  console.log(singleHero());
  return <div>Single Hero</div>;
}

export default SingleHero;
