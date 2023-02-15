import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import useData from "../hooks/useData";

const Fetch = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const API = `https://jsonplaceholder.typicode.com/posts/?_limit=10&_page=${pageNumber}`;
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    ["fetch", pageNumber],
    () => axios.get(API).then((res) => res.data)
  );
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <div>
      {/* <button onClick={refetch}>Fetch Again</button> */}
      <h1>Data</h1>
      {data.map((item, index) => {
        return (
          <div key={item.id}>
            <Link to={`/fetch/${item.id}`}>
              Title {item.id} - {item.title}
            </Link>
          </div>
        );
      })}
      <button onClick={() => setPageNumber((old) => old - 1)}>Prev</button>
      <button onClick={() => setPageNumber((old) => old + 1)}>Next</button>
    </div>
  );
};

export default Fetch;
