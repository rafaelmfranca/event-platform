import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ohzyj707e001xk7tyo58bk/master',
  cache: new InMemoryCache(),
});

export default client;
