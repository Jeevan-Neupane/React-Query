import useData from "../hooks/useData";
import styled from "styled-components";
import { useQuery } from "react-query";

const Button = styled.button`
  border: none;
  padding: 20px;
  outline: none;
  border-radius: 20px;
  cursor: pointer;
`;

const FetchData = async() => {
  return await axios.get("http://localhost:4001/superheroes");
};
function ButtonClick() {
  const data = useQuery(
    "super-heroes",
    FetchData,
    {
      //   enabled: false,
    }
  );

//   if (isLoading) {
//     <div>IsLoading...</div>;
//   }
  console.log(data);

  return (
    <div>
      <Button>Click to Fetch</Button>
      {/* {data.data.map((dat) => {
        return <h2 key={dat.name}>{dat.name}</h2>;
      })} */}
    </div>
  );
}

export default ButtonClick;
