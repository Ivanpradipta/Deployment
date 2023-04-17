import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://large-grizzly-13.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "6kjFuIyF4ozntU4mTililnhTJzlAQ136QJQ0D3w2wSennQHeCN7WgTcMcUDxpZ2j",
      },
    },
  })
);

const httpLink = new HttpLink({
  uri: "https://large-grizzly-13.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "6kjFuIyF4ozntU4mTililnhTJzlAQ136QJQ0D3w2wSennQHeCN7WgTcMcUDxpZ2j",
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;