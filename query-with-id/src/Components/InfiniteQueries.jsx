import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { Fragment } from "react";

const fetchColor = ({ pageParam = 1 }) => {
 
  return axios.get(`http://localhost:4001/colors?_limit=2&_page=${pageParam}`);
};

function InfiniteQueries() {
  const {
    data,
    isLoading,
    error,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchColor, {
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  console.log(isFetching , isFetchingNextPage)

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error}</div>;
  }
  const renderedList = data?.pages.map((group, i) => {
    return <Fragment key={i}>
      {
        group.data.map(color=>{
          return <h2 key={color.id} className="bg-slate-500 p-3 mt-3 text-white text-lg"> <span className="mr-2">{color.id}</span> {color.label}</h2>
        })
      }
    </Fragment>;
  });
  return (
    <>
      {renderedList}
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage} className="bg-emerald-600 text-white p-3 mt-3">
          Load More
        </button>
      </div>
      <div >{isFetching && !isFetchingNextPage ? "Fetching.." : null}</div>
    </>
  );
}

export default InfiniteQueries;
