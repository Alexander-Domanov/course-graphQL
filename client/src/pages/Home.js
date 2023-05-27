import {Clients} from '../components/client-home/Clients';
import {Projects} from '../components/projects-home/Projects';
import {AddClientModal} from '../components/modal/AddClientModal';
import {AddProjectModal} from "../components/modal/AddProjectModal";

export default function Home() {
    return (
        <>
            <div className='d-flex gap-3 mb-4'>
                <AddClientModal/>
                <AddProjectModal/>
            </div>
            <Projects/>
            <hr/>
            <Clients/>
        </>
    )
}