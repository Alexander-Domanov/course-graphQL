import {FaTrash} from "react-icons/fa";
import {useMutation} from "@apollo/client";
import {DELETE_CLIENT} from "../mutatuions/clientMutation";
import {GET_CLIENTS} from "../queries/clientQueries";


// refetchQueris - requests data for a new one. Because of it, the application may hang
//update Refresh the cache. Inside we set the data in connection with the client's deletion response. To configure the cache, see the app. If you want to remove warning from the console
export const ClientRow = ({client}) => {
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: {id: client.id},
        // refetchQueries: [{query: GET_CLIENTS}],
        update(cache, {data: {deleteClient}}) {
            const {clients} = cache.readQuery({query: GET_CLIENTS});
            cache.writeQuery({
                query: GET_CLIENTS,
                data: {
                    clients: clients.filter((client) => client.id !== deleteClient.id),
                },
            });
        },
    })

    return (
        <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>
                <button className='btn btn-danger btn-sm' onClick={deleteClient}>
                    <FaTrash/>
                </button>
            </td>
        </tr>
    )
}