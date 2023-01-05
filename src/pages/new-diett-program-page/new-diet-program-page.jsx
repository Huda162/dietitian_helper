import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Input from "../../common/input/input.component";
import Select from "../../common/select/select.component";
import DayMeals from "../../components/day-meals/day-meals.component";
import Header from "../../components/header/header.component";
import MealItem from "../../components/meal-item/meal-item.component";
import DAYS from "../../data/days";
import './new-diet-program.css';

const NewDietProgram = (props) => {

//     const [checked, setChecked] = useState([false, false, false, false, false, false, false]);

//     const handleChange = (index) => {
//         checked.forEach(x => {
//             setChecked(false);
//         })
//         setChecked[index](true);
// console.log(checked)
//     }

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
            <div className="days-container">
            <div className="tabs-container">
                {
                    DAYS.map((day, index) => {
                        return (
                            <div className="day-container" key={day}>
                                <input type='radio' name="tabs-container" id={day} key={day}/>
                                <label htmlFor={day}>{day}</label>
                            </div>
                        )
                    })
                }
            </div>
            </div>








            {/* <Tabs
                    className="tab-container"
                    value={value}
                    // onChange={handleChange(value)}
                    varient='scrollable'
                    scrollbuttons='auto'
                    aria-label='scrollable auto tabs example'
                >
                    <TabList>
                        {
                            DAYS.map((day) => {
                                return (<Tab className="day-tab" lable={day} key={day}>{day}</Tab> )
                            })
                        }
                    </TabList>
                    <TabPanel>
                        Sunday meals
                    </TabPanel>
                    <TabPanel>
                        2 meals
                    </TabPanel>
                    <TabPanel>
                        3 meals
                    </TabPanel>
                    <TabPanel>
                        4 meals
                    </TabPanel>
                    <TabPanel>
                        5 meals
                    </TabPanel>
                    <TabPanel>
                        6 meals
                    </TabPanel>
                    <TabPanel>
                        7 meals
                    </TabPanel>

                </Tabs> */}



            {/* <div className="days">
                    <button className="day-button" name="Saturday">Saturday</button>
                    <button className="day-button" name="Sunday">Sunday</button>
                    <button className="day-button" name="Monday">Monday</button>
                    <button className="day-button" name="Tuesday">Tuesday</button>
                    <button className="day-button" name="Wednesday">Wednesday</button>
                    <button className="day-button" name="Thursday">Thursday</button>
                    <button className="day-button" name="Friday">Saturday</button>
                </div> */}
        </form>
    </div>

)
}

export default NewDietProgram;