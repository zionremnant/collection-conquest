// Importing React, react-router and Apollo/client
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// Imorting file/pages from React
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import NewItem from './components/pages/NewItem';
import Item from './components/pages/Item';
import Login from './components/pages/Login';


// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'


//react calendar for date of purchase

// import Calendar from 'react-calendar';

// Apollo Client
const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

// Function to switch pages with routes
function App() {
    return (
        <ApolloProvider client={client}>
            <ChakraProvider>
                <Router>
                    <div className="flex-column justify-center align-center min-100-vh bg-primary">
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}
                            />
                            <Route
                                path="/Profile"
                                element={<Profile />}
                            />
                            <Route
                                path="/Login"
                                element={<Login />}
                            />
                            <Route
                                path="/NewItem"
                                element={<NewItem />}
                            />
                            <Route
                                path="/Item:itemId"
                                element={<Item />}
                            />

                        </Routes>
                    </div>
                </Router>
            </ChakraProvider>
        </ApolloProvider>
    );
}
// Exporting App.js
export default App;
