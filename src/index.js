import React from "react";
import ReactDOM from "react-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//APP
import { App } from "./routes/App.jsx";
import { AuthProvider } from "./hooks/Context.js";

const client = new ApolloClient({
  uri: "https://petgram-danielgzp.vercel.app/graphql",
  cache: new InMemoryCache(),
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
});

// const authLink = setContext((_, { headers }) => {
//   const token = window.sessionStorage.getItem("token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client2 = new ApolloClient({
//   link: authLink.concat(client),
//   cache: new InMemoryCache(),
// });

ReactDOM.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById("app")
);
