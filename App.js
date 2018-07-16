import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Menu from './menu';


const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cjjnsalpc3u5k0191neyftzar"
  }),
  cache: new InMemoryCache
});

export default class App extends React.Component {
  render() {
    return (      
      <ApolloProvider client= {client}>
        <Menu />
      </ApolloProvider>
    );
  }
}

