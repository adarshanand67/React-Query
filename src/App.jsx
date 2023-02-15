import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Dynamic from "./components/Dynamic";
import Fetch from "./components/Fetch";
import Friends from "./components/Friends";
import Single from "./components/Single";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Fetch/>
                {/* <Friends/> */}
              </>
            }
          />
          <Route path="fetch/:id" element={<Single />} />
          <Route path="dynamic" element={<Dynamic IDs={[1]} />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
