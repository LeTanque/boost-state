// Apollo
import ApolloClient, { InMemoryCache } from "apollo-boost"; // link is not exported from this version of apollo-client


// Endpoint
export const todoClient = new ApolloClient({
    uri: "https://plp0mopxq.sse.codesandbox.io/", // TODO
    cache: new InMemoryCache()
});

export const revitalizeClient = new ApolloClient({
    uri: "https://revitalize-production.herokuapp.com/", // Revitalize
    cache: new InMemoryCache()
});
