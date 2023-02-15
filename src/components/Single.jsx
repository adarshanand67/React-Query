import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import useData from "../hooks/useData";

const Single = () => {
  const { id } = useParams();
  const API = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    ["single", id],
    () => axios.get(API).then((res) => res.data),
    {
      keepPreviousData: true,
    }
  );

  return (
    <>
      <h1>
        <Link to="/">Back</Link> <br />
        {isLoading && <p>Loading...</p>}
        {isError && <p>{error.message}</p>}
        {isFetching && <p>Fetching...</p>}
        {data && <p>{data.title}</p>}
        <button onClick={() => refetch()}>Refetch</button>
      </h1>
    </>
  );
};

export default Single;
