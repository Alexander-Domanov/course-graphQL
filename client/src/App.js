import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import {Header} from "./components/Header";
import {Clients} from "./components/Clients";
import {AddClientModal} from "./components/AddClientModal";
import {Projects} from "./components/Projects";



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
                <AddClientModal/>
                <Projects/>
                <Clients/>
            </ApolloProvider>
        </>
    )
}


