import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Input from "../../common/input/input.component";
import Select from "../../common/select/select.component";
import DayMeals from "../../components/day-meals/day-meals.component";
import Header from "../../components/header/header.component";
import MealItem from "../../components/meal-item/meal-item.component";
import DAYS from "../../data/days";
import './new-diet-program.css';
import CITIES from "../../data/cities";
import PopupMeal from "../../components/popup-meal/popup-meal.component";

const NewDietProgram = (props) => {
    const [openAddButton, setOpenAddButton] = useState(false);
    const [chosedDay, setChosedDay] = useState("Saturday");
    let initialMeals = [];
    const [meals, setMeals] = useState(initialMeals);
    const sundayMeals = [];

    const getFoodItems = () => {
        const items = JSON.parse(localStorage.foods || '[]');
        setMeals(items);
    };

    useEffect(() => {
        getFoodItems();
    }, []);

    const openAddDayMealPopup = () => {
        setOpenAddButton(!openAddButton);
    }

    const ChooseDayHandler = (e) =>{
        setChosedDay(e.target.value); 
    }

    const addHandler = (e) =>{
        e.preventDefault();
        const food = e.target.food.value;
        const amount = Number(e.target.amount.value);

        const selectedMeal=meals.filter((meal)=> meal.food===food)
        const image = selectedMeal.image;
        const calories = selectedMeal.calories/selectedMeal.amount*amount;
        const mealItem = {
            id: Date.now(),
            food: food,
            image: image,
            calories: calories,
            amount: amount
        };

        sundayMeals.push(mealItem);
        console.log(sundayMeals);
    };

    return (

        <div className="page">
            <Header />
            <form >
                <div className="top-container">
                    <div className="patient-info">
                        <Input label="Name" />
                        <Input label="Phone" type="number" />
                        <Input label="Email" />
                        <Input label="Date of Birth" type="datetime-local" />
                        <Select label="City">
                            {
                                CITIES.map((city, index) => {
                                    return (<option key={index}>{city}</option>);
                                }
                                )
                            }
                        </Select>
                    </div>
                    <div className="days-container">
                        <div className="tabs-container">
                            {
                                DAYS.map((day, index) => {
                                    return (
                                        <div className="day-container" key={day} onChange={ChooseDayHandler}>
                                            <input type='radio' name="tabs-container" id={day} key={day} value={day}/>
                                            <label htmlFor={day}>{day}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <DayMeals openAddDayMealPopup={openAddDayMealPopup} >
                            {
                            sundayMeals.map((meal, index)=>{
                                return(
                                    <MealItem item={meal}
                                    key={index}/>
                                )
                            })}
                        </DayMeals>
                    </div>
                </div>
                <div className="buttom-container">
                    <button type="submit" className="buttons">Add Patient</button>
                </div>
            </form>
            <PopupMeal
                openAddButton={openAddButton}
                openAddDayMealPopup={openAddDayMealPopup}
                addHandler={addHandler}
                title="Add Meal"
                submit="Add"
            />
        </div>

    )
}

export default NewDietProgram;