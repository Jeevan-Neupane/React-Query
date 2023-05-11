import styled from "styled-components";
import useSuperHeroData from "../hooks/useSuperHeroData";

const Button = styled.button`
  padding: 20px 30px;
  border: none;
  background-color: limegreen;
  cursor: pointer;
  outline: none;
`;

function RQSuperHero() {
  // const [polling, setPolling] = useState(3000)
  const { isLoading, data, isError, error, isFetching, refetch } =useSuperHeroData(onSuccess,onError);
  console.log(data)

    function onSuccess(data){
      // if(data.data.length===4){
      //   setPolling(0);
      // }
    }
    function onError(data){
      // if(error){
      //   setPolling(0);
      // }
    }

    console.log("isLoading", isLoading, "isFetching", isFetching);

  if (isLoading || isFetching) {
    return <h2>isLoading....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Fetching</h2>
      {/* <Button onClick={refetch}>Fetch Data</Button> */}
      {data.data.map((data) => {
        return <div key={data.name}>{data.name}</div>;
      })}
    </>
  );
}

export default RQSuperHero;
