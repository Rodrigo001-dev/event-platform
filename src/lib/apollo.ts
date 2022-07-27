import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl63aqe7i6hm501uk7f6qg7fv/master',
  // por padrão o Apollo vai fazer o cache na memória da aplicação como variáveis
  cache: new InMemoryCache()
});