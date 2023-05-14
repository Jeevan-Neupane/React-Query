import axios from "axios";
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";

const fetchData = ({ pageParam = 1 }) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${pageParam}`
  );
};

function InfiniteQueries() {
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["posts"], fetchData, {
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < 50) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  console.log(isFetchingNextPage)

  const renderedItems = data?.pages.map((group, i) => {
    return (
      <Fragment key={i}>
        {group?.data.map((post) => {
          return (
            <div key={post.id} className="border p-5 mt-3 ">
              <h2 className="text-2xl text-center font-semibold">{post.title.slice(0,12)}</h2>
              <p className="mx-5 text-justify mt-2">{post.body}{post.body}</p>
            </div>
          );
        })}
      </Fragment>
    );
  });



  return (
    <div className="h-screen flex items-center flex-col mx-5">
      <div>{renderedItems}</div>
      <button
        disabled={!hasNextPage}
        className="bg-teal-500 p-2 text-lg text-white mt-4"
        onClick={fetchNextPage}
      >
        Increase
      </button>

      <div>
        {isFetchingNextPage && <p>Fetching Next Page</p>}
      </div>
    </div>
  );
}

export default InfiniteQueries;
