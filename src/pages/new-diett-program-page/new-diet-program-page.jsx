import Input from "../../common/input/input.component";
import Select from "../../common/select/select.component";
import Header from "../../components/header/header.component";
import MealItem from "../../components/meal-item/meal-item.component";
import './new-diet-program.css';

const NewDietProgram = (props) => {
    return (

        <div className="page">
            <Header />
            <form className="container">
                <div className="patient-info">
                    <Input label="Name" />
                    <Input label="Phone" type="number" />
                    <Input label="Email" />
                    <Input label="Date of Birth" type="datetime-local" />
                    <Select label="City" />
                </div>
                <div className="days">
                    <button className="day-button" name="Saturday">Saturday</button>
                    <button className="day-button" name="Sunday">Sunday</button>
                    <button className="day-button" name="Monday">Monday</button>
                    <button className="day-button" name="Tuesday">Tuesday</button>
                    <button className="day-button" name="Wednesday">Wednesday</button>
                    <button className="day-button" name="Thursday">Thursday</button>
                    <button className="day-button" name="Friday">Saturday</button>
                </div>
            </form>
        </div>

    )
}

export default NewDietProgram;