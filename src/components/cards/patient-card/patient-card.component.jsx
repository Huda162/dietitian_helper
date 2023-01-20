import Card from '../meal-card/card.component';
import './patient-card.css';
import { FilePdf, Trash } from "phosphor-react"
import generatePDF from '../../../hooks and functions/genereta-pdf/generate-pdf';


const PatientCard = (props) => {
    return (
            <Card>
                <span className='info-container'>
                    <p><br /><b>Name: </b>{props.patient.name}<br /><b> Total Calories: </b> {props.patient.totalCalories}</p>
                </span>
                <span className='icons-container'>
                    <br />
                    <Trash size={24} className="icon" onClick={props.deleteItem}/>
                    <br />
                    <FilePdf size={24} className="icon" onClick={()=>generatePDF(props.patient)}/>
                </span>
            </Card>

    )
}

export default PatientCard;