import { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import PatientCard from "../../components/cards/patient-card/patient-card.component";
import './view-programs.css';

const ViewProgram = (props) => {
    const initialPatients = [];
    const [patients, setPatients] = useState(initialPatients);
    const refresh = () => window.location.reload(true);

    const getPatients = () => {
        const items = JSON.parse(localStorage.patients || '[]');
        setPatients(items);
    };

    useEffect(() => {
        getPatients();
    }, []);

    const deleteItem = (i) => {
        let itemsJson = JSON.parse(localStorage.getItem('patients')) || [];
        itemsJson.splice(i, 1);
        localStorage.setItem('patients', JSON.stringify(itemsJson));
        refresh();
    };

    return (
        <div className="page">
            <Header />
            <div className="container">
                {
                    patients.map((patient, index) => {
                        return (
                            <PatientCard
                                patient={patient}
                                key={index}
                                deleteItem={() => deleteItem(index)}
                            />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default ViewProgram;