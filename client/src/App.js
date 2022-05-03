// Importing React, react-router and Apollo/client
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// Imorting file/pages from React
import Home from './pages/Home';
import Profile from './pages/Profile';
import NewItem from './pages/NewItem';
import Item from './pages/Item';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
// Apollo Client
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
// Function to switch pages with routes
function App() {
  return (
    <ApolloProvider client={client}>
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
            <Route 
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}
// Exporting App.js
export default App;
