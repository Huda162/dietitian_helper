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
import { useNavigate } from "react-router-dom";

const NewDietProgram = (props) => {
    const [addToDayButton, setAddToDayButton] = useState(false);
    const [chosedDay, setChosedDay] = useState("");
    const [triggerUpdate, setTriggerUpdate] = useState(false);
    let initialMeals = [];
    const [meals, setMeals] = useState(initialMeals);
    const [saturdayMeals, setSaturdayMeals] = useState(initialMeals);
    const [sundayMeals, setSundayMeals] = useState(initialMeals);
    const [mondayMeals, setMondayMeals] = useState(initialMeals);
    const [tuesdayMeals, setTuesdayMeals] = useState(initialMeals);
    const [wednesdayMeals, setWednesdayMeals] = useState(initialMeals);
    const [thursdayMeals, setThursdayMeals] = useState(initialMeals);
    const [fridayMeals, setFridayMeals] = useState(initialMeals);
    const [totalCalories, setTotalCalories] = useState(0);
    const onNavigate = useNavigate();

    const getFoodItems = () => {
        setMeals(JSON.parse(localStorage.foods || '[]'));
    };

    const calculateTotalCalories = () => {
        let total = 0;
        saturdayMeals.forEach(meal => {
            total = total + meal.calories;
        });
        sundayMeals.forEach(meal => {
            total = total + meal.calories;
        });
        mondayMeals.forEach(meal => {
            total = total + meal.calories;
        });
        tuesdayMeals.forEach(meal => {
            total = total + meal.calories;
        });
        wednesdayMeals.forEach(meal => {
            total = total + meal.calories;
        });
        thursdayMeals.forEach(meal => {
            total = total + meal.calories;
        });
        fridayMeals.forEach(meal => {
            total = total + meal.calories;
        });
        setTotalCalories(Math.ceil(total));
    }

    useEffect(() => {
        if (triggerUpdate) {
            getFoodItems();
            calculateTotalCalories();
            setTriggerUpdate(false);
        }
    }, [triggerUpdate]);

    const calculateDayCalories = () => {
        let totalDayCal = 0;
        switch (chosedDay) {
            case 'Saturday':
                saturdayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.ceil(totalDayCal);
            case 'Sunday':
                sundayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.ceil(totalDayCal);
            case 'Monday':
                mondayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.ceil(totalDayCal);
            case 'Tuesday':
                tuesdayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.ceil(totalDayCal);
            case 'Wednesday':
                wednesdayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.ceil(totalDayCal);
            case 'Thursday':
                thursdayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.ceil(totalDayCal);
            case 'Friday':
                fridayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.ceil(totalDayCal);
            default:
                break;
        }
    };

    const calculateNoOfDayMeals = () => {
        switch (chosedDay) {
            case 'Saturday': return saturdayMeals.length;
            case 'Sunday': return sundayMeals.length;
            case 'Monday': return mondayMeals.length;
            case 'Tuesday': return tuesdayMeals.length;
            case 'Wednesday': return wednesdayMeals.length;
            case 'Thursday': return thursdayMeals.length;
            case 'Friday': return fridayMeals.length;
            default:
                break;
        }
    }

    const openAddDayMealPopup = () => {
        setAddToDayButton(!addToDayButton);
    }

    const ChooseDayHandler = (e) => {
        setChosedDay(e.target.value);
    }

    const addDayMeal = (e) => {
        e.preventDefault();
        const foodIndex = e.target.food.value;
        const amount = Number(e.target.amount.value);
        const selectedMeal = meals.filter((meal, index) => index === foodIndex);
        const foodName = selectedMeal[0].food;
        const image = selectedMeal[0].image;
        const calories = selectedMeal[0].calories / selectedMeal[0].amount * amount;
        const mealItem = {
            id: Date.now(),
            food: foodName,
            image: image,
            calories: calories,
            amount: amount
        };

        switch (chosedDay) {
            case 'Saturday':
                const satAfterAddition = [...saturdayMeals, mealItem];
                setSaturdayMeals(satAfterAddition);
                break;
            case 'Sunday':
                const sunAfterAddition = [...sundayMeals, mealItem];
                setSundayMeals(sunAfterAddition);
                break;
            case 'Monday':
                const monAfterAddition = [...mondayMeals, mealItem];
                setMondayMeals(monAfterAddition);
                break;
            case 'Tuesday':
                const tueAfterAddition = [...tuesdayMeals, mealItem];
                setTuesdayMeals(tueAfterAddition);
                break;
            case 'Wednesday':
                const wenAfterAddition = [...wednesdayMeals, mealItem];
                setWednesdayMeals(wenAfterAddition);
                break;
            case 'Thursday':
                const thuAfterAddition = [...thursdayMeals, mealItem];
                setThursdayMeals(thuAfterAddition);
                break;
            case 'Friday':
                const friAfterAddition = [...fridayMeals, mealItem];
                setFridayMeals(friAfterAddition);
                break;
            default:
                break;
        }

        openAddDayMealPopup();
        setTriggerUpdate(true);
    };

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
            saturdayMeals: saturdayMeals,
            sundayMeals: sundayMeals,
            mondayMeals: mondayMeals,
            tuesdayMeals: tuesdayMeals,
            wednesdayMeals: wednesdayMeals,
            thursdayMeals: thursdayMeals,
            fridayMeals: fridayMeals,
            totalCalories: totalCalories
        }
        const itemsJson = localStorage.getItem('patients');
        const patients = JSON.parse(itemsJson) || [];
        patients.push(patient);
        localStorage.setItem('patients', JSON.stringify(patients));
        onNavigate('/view-program');
    };

    return (

        <div className="page">
            <Header/>
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
                            chosedDay !== "" &&
                            <div>
                                <DayMeals
                                    openAddDayMealPopup={openAddDayMealPopup}
                                    cal={calculateDayCalories}
                                    mealsNumber={calculateNoOfDayMeals}>
                                    {
                                        chosedDay === "Saturday" &&
                                        saturdayMeals.map((meal, index) => {
                                            return (
                                                <MealItem className="mealCard" item={meal}
                                                    key={index} />
                                            )
                                        })
                                    }
                                    {
                                        chosedDay === "Sunday" &&
                                        sundayMeals.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })
                                    }
                                    {
                                        chosedDay === "Monday" &&
                                        mondayMeals.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })
                                    }
                                    {
                                        chosedDay === "Tuesday" &&
                                        tuesdayMeals.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })
                                    }
                                    {
                                        chosedDay === "Wednesday" &&
                                        wednesdayMeals.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })
                                    }
                                    {
                                        chosedDay === "Thursday" &&
                                        thursdayMeals.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })
                                    }
                                    {
                                        chosedDay === "Friday" &&
                                        fridayMeals.map((meal, index) => {
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
                addHandler={addDayMeal}
                title="Add Meal"
                submit="Add"
            />
        </div>

    )
}

export default NewDietProgram;