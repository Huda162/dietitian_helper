import Input from "../../common/input/input.component";
import Header from "../../components/header/header.component";
import './new-diet-program.css';

const NewDietProgram = (props) =>{
    return(
        <div className="container">
            <Header/>
            <div className="patient-info">
                <Input label="Name"/>
                <Input label="Phone" type="number"/>
                <Input label="Email"/>
                <Input label="Date of Birth" type="datetime-local"/>
                <Input label="City"/>
            </div>
        </div>
        
    )
}

export default NewDietProgram;