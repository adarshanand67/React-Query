import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

// Parallel queries - write one below one

// Dynamic parallel queries
const onSuccess = (data) => {
  console.log("onSuccess", data);
};

const onError = (error) => {
  console.log("onError", error);
};

function fetcher(API) {
  return axios.get(API).then((res) => res.data);
}

const Dynamic = ({ IDs }) => {
  const queryResults = useQueries(
    IDs.map((id) => ({
      queryKey: ["dynamic", id],
      queryFn: () =>
        fetcher(`https://jsonplaceholder.typicode.com/posts/${id}`),
      onSuccess: onSuccess,
      onError: onError,
    }))
  );
  console.log("queryResults", queryResults);
  return <div>Dynamic</div>;
};

export default Dynamic;
