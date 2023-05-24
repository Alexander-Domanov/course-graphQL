import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';import {Header} from "./components/Header";
import {Clients} from "./components/Clients";


// existing - incoming data. incoming - returned data
const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
                projects: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
            },
        },
    },
})

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache,
})

export const App = () => {
    return (
        <>
            <ApolloProvider client={client}>
                <Header/>
                <Clients/>
            </ApolloProvider>
        </>
    )
}


