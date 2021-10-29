import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/auth/register'
import Login from './pages/auth/login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NotFound from './pages/404'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </ApolloProvider>
  )
}

export default App
