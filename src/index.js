// import React from "react";
// import ReactDOM from "react-dom";

// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// //APP
// import { App } from "./routes/App.jsx";
// import { AuthProvider } from "./hooks/Context.js";

// const client = new ApolloClient({
//   uri: "https://petgram-danielgzp.vercel.app/graphql",
//   cache: new InMemoryCache(),
//   request: operation => {
//     const token = window.sessionStorage.getItem('token')
//     const authorization = token ? `Bearer ${token}` : ''
//     operation.setContext({
//       headers: {
//         authorization
//       }
//     })
//   },
//   onError: error => {
//     const { networkError } = error
//     if (networkError && networkError.result.code === 'invalid_token') {
//       window.sessionStorage.removeItem('token')
//       window.location.href = '/'
//     }
//   }
// });

// ReactDOM.render(
//   <AuthProvider>
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   </AuthProvider>,
//   document.getElementById("app")
// );

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./routes/App.jsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
} from "@apollo/client";
import { AuthProvider } from "./hooks/Context.js";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
  uri: "https://petgram-danielgzp.vercel.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = window.sessionStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: onError(({ networkError }) => {
    if (networkError && networkError.result.code === "invalid_token") {
      window.sessionStorage.removeItem("token");
      window.location = "/user";
    }
  }),
});

ReactDOM.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById("app")
);