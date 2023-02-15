import axios from "axios";
import { useQuery } from "react-query";

const onSuccess = (data) => {
  console.log("onSuccess", data);
};

const onError = (error) => {
  console.log("onError", error);
};

function fetcher(API) {
  return axios.get(API).then((res) => res.data);
}

const useData = (pageNumber, key, API) => {
  // console.log(API);

  return useQuery(
    key, // key for react-query
    () => fetcher(API), // fetcher function
    {
      // refetchOnMount: false,
      // refetchOnWindowFocus: false,
      // refetchInterval: 1000, // Polling not background
      // refetchIntervalInBackground: true, // Polling in background
      // enabled: false, // no apiquery called
      onSuccess: onSuccess,
      onError: onError,
      // select: (data) => {
      //   const { userId, title, body } = data;
      //   return { userId, title, body };
      //   // Transform data into specific format before displaying in frontend
      // },
    }
  );
};

export default useData;
