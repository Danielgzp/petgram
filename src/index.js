import React from "react";
import ReactDOM from "react-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//APP
import { App } from "./routes/App.jsx";

const client = new ApolloClient({
  uri: "https://petgram-danielgzp.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById("app")
);
