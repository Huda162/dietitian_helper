import { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import PatientCard from "../../components/cards/patient-card/patient-card.component";
import './view-programs.css';
import generatePDF from "../../hooks and functions/genereta-pdf/generate-pdf";
import PatientList from "../../components/patient-list/patient-list.component";

const ViewProgram = () => {
    return (
        <div className="page">
            <Header />
           <PatientList/>
        </div>

    )
}

export default ViewProgram;