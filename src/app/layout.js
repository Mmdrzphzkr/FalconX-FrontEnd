"use client";
import React from "react";
import { AuthProvider } from "react-oidc-context";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import client from "../lib/apollo-client";
import Header from "../components/headers/header";
import "./globals.css";

// OIDC configuration
const oidcConfig = {
  authority: "https://localhost:5001", // Your Orchard OpenID server
  client_id: "client1", // Your OpenID client ID from Orchard
  redirect_uri: "http://localhost:3000", // Your Next.js app URL
  response_type: "code",
  scope: "openid email profile", // Modify scopes as needed
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {/* OIDC Provider for Authentication */}
        <AuthProvider {...oidcConfig}>
          {/* Apollo Provider for GraphQL */}
          <ApolloProvider client={client}>
            <Provider store={store}>
              <Header />
              {children}
            </Provider>
          </ApolloProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
