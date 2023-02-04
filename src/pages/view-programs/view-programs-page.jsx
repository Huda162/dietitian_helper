import Header from "../../components/header/header.component";
import './view-programs.css';
import PatientList from "../../components/patient-list/patient-list.component";

const ViewProgram = (props) => {

    return (
        <div className="page">
            <Header/>
           <PatientList/>
        </div>

    )
}

export default ViewProgram;