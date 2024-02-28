import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ReactDOM from "react-dom/client";

import App from "./App";

const client = new ApolloClient({
  uri: "https://main--spacex-l4uc6p.apollographos.net/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
