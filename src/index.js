import React from "react";
import ReactDOM from "react-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//APP
import { App } from "./routes/App.jsx";
import { AuthProvider } from "./hooks/Context.js";

const client = new ApolloClient({
  uri: "https://petgram-danielgzp.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById("app")
);
