import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient ({
    uri: 'http://134.209.145.73/v1/graphql',
    cache: new InMemoryCache(),
})