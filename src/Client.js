import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log( `Bearer ${process.env.REACT_APP_API_KEY}`)
const Client = new ApolloClient({
  uri: "https://syn-api-prod.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiNTZmMTAxOWVjYWQyIiwicHJvamVjdElkIjoiMzQzZTkxMTEtNTExOC00NGZiLWE2M2ItYjc4MjNmZmJkMjg2IiwiZnVsbE5hbWUiOiJJc3JhZWwgU2FudGlhZ28gUGFuY2NhIE1hbWFuaSIsImVtYWlsIjoiaXNyYWVsLm9ubHkyM0BnbWFpbC5jb20iLCJpYXQiOjE2Nzc2MzE5NjB9.eIndy99wTIREHM_w-t2_WPf7_PCwOlZcGEAfkEW_D7c`,
  },
});
export default Client; 