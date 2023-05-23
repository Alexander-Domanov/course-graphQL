import {gql, useQuery} from "@apollo/client";

const GET_CLIENTS = gql`
 query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`

export const Clients = () => {
    const {loading, error, data} = useQuery(GET_CLIENTS)
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    return (
        <div>
            {data && data.clients.map(client => (
                <div key={client.id}>
                    <p>{client.name}</p>
                    <p>{client.email}</p>
                    <p>{client.phone}</p>
                </div>
            ))}
        </div>
    )
}