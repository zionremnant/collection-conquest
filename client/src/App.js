// Importing React, react-router and Apollo/client

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import NewItem from "./components/pages/NewItem";
import Item from "./components/pages/Item";


import Login from "./components/pages/Login";


import { ChakraProvider } from "@chakra-ui/react";



import Navbar from "./components/navbar";




const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Function to switch pages with routes
function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Router>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile/:username" element={<Profile />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/NewItem" element={<NewItem />} />
            <Route path="/Item/:name" element={<Item />} />
          </Routes>

        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
