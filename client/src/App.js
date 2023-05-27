import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {Header} from "./ui/Header";
import {Project} from "./pages/Project";


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
                <Router>
                    <Header />
                    <div className='container'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/projects/:id' element={<Project />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </div>
                </Router>
            </ApolloProvider>
        </>
    )
}


