import { ApolloClient, InMemoryCache } from "@apollo/client";

// console.log( `Bearer ${process.env.REACT_APP_API_KEY}`)
const Client = new ApolloClient({
  uri: "https://syn-api-prod.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});
export default Client; 