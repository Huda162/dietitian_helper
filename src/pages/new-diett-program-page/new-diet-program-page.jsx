import { useEffect, useState } from "react";
import Input from "../../common/input/input.component";
import Select from "../../common/select/select.component";
import DayMeals from "../../components/day-meals/day-meals.component";
import Header from "../../components/header/header.component";
import MealItem from "../../components/cards/meal-item/meal-item.component";
import DAYS from "../../data/days";
import './new-diet-program.css';
import CITIES from "../../data/cities";
import PopupMeal from "../../components/popups/popup-meal/popup-meal.component";
import useAddDayMeal from "../../hooks/add-meal-to-day/add-meal-to-day.hook";
import { useNavigate } from "react-router-dom";

const NewDietProgram = (props) => {
    const [addToDayButton, setAddToDayButton] = useState(false);
    const [chosedDay, setChosedDay] = useState("");
    let initialMeals = [];
    const [meals, setMeals] = useState(initialMeals);
    const addDayMeal = useAddDayMeal(addToDayButton, chosedDay);
    const onNavigate = useNavigate();

    const getFoodItems = () => {
        setMeals(JSON.parse(localStorage.foods || '[]'));
    };

    useEffect(() => {
        getFoodItems();
    }, []);

    useEffect(() => {
        if (addDayMeal.triggerUpdate) {
            getFoodItems();
        }
    }, [addDayMeal.triggerUpdate]);

    const openAddDayMealPopup = () => {
        setAddToDayButton(!addToDayButton);
    }

    const ChooseDayHandler = (e) => {
        setChosedDay(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const dob = e.target.dob.value;
        const city = e.target.city.value;
        const patient = {
            name: name,
            phone: phone,
            email: email,
            dob: dob,
            city: city,
            saturdayMeals: addDayMeal.saturdayMeals,
            sundayMeals: addDayMeal.sundayMeals,
            mondayMeals: addDayMeal.mondayMeals,
            tuesdayMeals: addDayMeal.tuesdayMeals,
            wednesdayMeals: addDayMeal.wednesdayMeals,
            thursdayMeals: addDayMeal.thursdayMeals,
            fridayMeals: addDayMeal.fridayMeals,
            totalCalories: addDayMeal.totalCalories
        }
        const itemsJson = localStorage.getItem('patients');
        const patients = JSON.parse(itemsJson) || [];
        patients.push(patient);
        localStorage.setItem('patients', JSON.stringify(patients));
        onNavigate('/view-program');
    };

    return (

        <div className="page">
            <Header />
            <form onSubmit={submitHandler}>
                <div className="top-container">
                    <div className="patient-info">
                        <Input label="Name" name="name" />
                        <Input label="Phone" type="number" name="phone" />
                        <Input label="Email" name="email" />
                        <Input label="Date of Birth" type="date" name="dob" />
                        <Select label="City" name="city" defaultValue={CITIES[0]}
                        >
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
                                            <input type='radio' name="tabs-container" id={day} key={day} value={day} />
                                            <label htmlFor={day}>{day}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {
                            chosedDay != "" &&
                            <div>
                                <DayMeals
                                    openAddDayMealPopup={openAddDayMealPopup}
                                    cal={() => addDayMeal.calculateDayCalories}
                                    mealsNumber={() => addDayMeal.calculateNoOfDayMeals}

                                >
                                    {
                                        chosedDay == "Saturday" &&
                                        addDayMeal.saturdayMeals.value.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })
                                    }
                                    {
                                        chosedDay == "Sunday" &&
                                        addDayMeal.sundayMeals.value.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })
                                    }
                                    {
                                        chosedDay == "Monday" &&
                                        addDayMeal.mondayMeals.value.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })
                                    }
                                    {
                                        chosedDay == "Tuesday" &&
                                        addDayMeal.tuesdayMeals.value.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })
                                    }
                                    {
                                        chosedDay == "Wednesday" &&
                                        addDayMeal.wednesdayMeals.value.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })
                                    }
                                    {
                                        chosedDay == "Thursday" &&
                                        addDayMeal.thursdayMeals.value.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })
                                    }
                                    {
                                        chosedDay == "Friday" &&
                                        addDayMeal.fridayMeals.value.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })
                                    }

                                </DayMeals>
                            </div>
                        }
                    </div>
                </div>
                <div className="buttom-container">
                    <button type="submit" className="buttons" >Add Patient</button>
                </div>
            </form>
            <PopupMeal
                openAddButton={addToDayButton}
                openAddDayMealPopup={openAddDayMealPopup}
                addHandler={() => {
                    addDayMeal.submit();
                    openAddDayMealPopup();
                }}
                title="Add Saturday Meal"
                submit="Add"
            />
        </div>

    )
}

export default NewDietProgram;