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
    const [addToSaturdayButton, setAddToSaturdayButton] = useState(false);
    const [addToSundayButton, setAddToSundayButton] = useState(false);
    const [addToMondayButton, setAddToMondayButton] = useState(false);
    const [addToTuesdayButton, setAddToTuesdayButton] = useState(false);
    const [addToWednesdayButton, setAddToWednesdayButton] = useState(false);
    const [addToThursdayButton, setAddToThursdayButton] = useState(false);
    const [addToFridayButton, setAddToFridayButton] = useState(false);
    const [chosedDay, setChosedDay] = useState("Saturday");
    let initialMeals = [];
    const [meals, setMeals] = useState(initialMeals);
    const [saturdayMeals, setSaturdayMeals] = useState(initialMeals);
    const [sundayMeals, setSundayMeals] = useState(initialMeals);
    const [mondayMeals, setMondayMeals] = useState(initialMeals);
    const [tuesdayMeals, setTuesdayMeals] = useState(initialMeals);
    const [wednesdayMeals, setWednesdayMeals] = useState(initialMeals);
    const [thursdayMeals, setThursdayMeals] = useState(initialMeals);
    const [fridayMeals, setFridayMeals] = useState(initialMeals);
    let totalSaturdayCal = 0;
    let totalSundayCal = 0;
    let totalMondayCal = 0;
    let totalTuesdayCal = 0;
    let totalWednesdayCal = 0;
    let totalThursdayCal = 0;
    let totalFridayCal = 0;
    let refresh = () => window.location.reload(true);



    const getFoodItems = () => {
        const items = JSON.parse(localStorage.foods || '[]');
        const saturdayItems = JSON.parse(localStorage.saturdayMeals || '[]');
        const sundayItems = JSON.parse(localStorage.sundayMeals || '[]');
        const mondayItems = JSON.parse(localStorage.mondayMeals || '[]');
        const tuesdayItems = JSON.parse(localStorage.tuesdayMeals || '[]');
        const wednesdayItems = JSON.parse(localStorage.wednesdayMeals || '[]');
        const thursdayItems = JSON.parse(localStorage.thursdayMeals || '[]');
        const fridayItems = JSON.parse(localStorage.fridayMeals || '[]');
        setMeals(items);
        setSaturdayMeals(saturdayItems);
        setSundayMeals(sundayItems);
        setMondayMeals(mondayItems);
        setTuesdayMeals(tuesdayItems);
        setWednesdayMeals(wednesdayItems);
        setThursdayMeals(thursdayItems);
        setFridayMeals(fridayItems);
    };


    useEffect(() => {
        getFoodItems();
    }, []);

    const calculateSaturdayCalories = () => {
        const saturdayItems = JSON.parse(localStorage.saturdayMeals || '[]');
        saturdayItems.forEach(meal => {
            totalSaturdayCal = totalSaturdayCal + meal.calories;
        })
        return totalSaturdayCal;
    }
    const calculateSundayCalories = () => {
        const sundayItems = JSON.parse(localStorage.sundayMeals || '[]');
        sundayItems?.forEach(meal => {
            totalSundayCal = totalSundayCal + meal.calories;
        })
        return totalSundayCal;
    }
    const calculateMondayCalories = () => {
        const mondayItems = JSON.parse(localStorage.mondayMeals || '[]');
        mondayItems.forEach(meal => {
            totalMondayCal = totalMondayCal + meal.calories;
        })
        return totalMondayCal;
    }
    const calculateTuesdayCalories = () => {
        const tuesdayItems = JSON.parse(localStorage.tuesdayMeals || '[]');
        tuesdayItems.forEach(meal => {
            totalTuesdayCal = totalTuesdayCal + meal.calories;
        })
        return totalTuesdayCal;
    }
    const calculateWednesdayCalories = () => {
        const wednesdayItems = JSON.parse(localStorage.wednesdayMeals || '[]');
        wednesdayItems.forEach(meal => {
            totalWednesdayCal = totalWednesdayCal + meal.calories;
        })
        return totalWednesdayCal;
    }
    const calculateThursdayCalories = () => {
        const thursdayItems = JSON.parse(localStorage.thursdayMeals || '[]');
        thursdayItems.forEach(meal => {
            totalThursdayCal = totalThursdayCal + meal.calories;
        })
        return totalThursdayCal;
    }
    const calculateFridayCalories = () => {
        const fridayItems = JSON.parse(localStorage.fridayMeals || '[]');
        fridayItems.forEach(meal => {
            totalFridayCal = totalFridayCal + meal.calories;
        })
        return totalFridayCal;
    }
    const openAddSaturdayMealPopup = () => {
        setAddToSaturdayButton(!addToSaturdayButton);
    }
    const openAddSundayMealPopup = () => {
        setAddToSundayButton(!addToSundayButton);
    }
    const openAddMondayMealPopup = () => {
        setAddToMondayButton(!addToMondayButton);
    }
    const openAddTuesdayMealPopup = () => {
        setAddToTuesdayButton(!addToTuesdayButton);
    }
    const openAddWednesdayMealPopup = () => {
        setAddToWednesdayButton(!addToWednesdayButton);
    }
    const openAddThursdayMealPopup = () => {
        setAddToThursdayButton(!addToThursdayButton);
    }
    const openAddFridayMealPopup = () => {
        setAddToFridayButton(!addToFridayButton);
    }

    const ChooseDayHandler = (e) => {
        setChosedDay(e.target.value);
    }

    const addToSaturday = (e) => {
        e.preventDefault();
        const food = e.target.food.value;
        const amount = Number(e.target.amount.value);
        const selectedMeal = meals.filter((meal, index) => index == food)
        const image = selectedMeal[0].image;
        const calories = selectedMeal[0].calories / selectedMeal[0].amount * amount;
        const mealItem = {
            id: Date.now(),
            food: food,
            image: image,
            calories: calories,
            amount: amount
        };


        const itemsJson = localStorage.getItem('saturdayMeals');
        const items = JSON.parse(itemsJson) || [];

        items.push(mealItem);

        localStorage.setItem('saturdayMeals', JSON.stringify(items));
        openAddSaturdayMealPopup();
        refresh();

    };
    const addToSunday = (e) => {
        e.preventDefault();
        const food = e.target.food.value;
        const amount = Number(e.target.amount.value);

        const selectedMeal = meals.filter((meal, index) => index == food)
        const image = selectedMeal[0].image;
        const calories = selectedMeal[0].calories / selectedMeal[0].amount * amount;
        const mealItem = {
            id: Date.now(),
            food: food,
            image: image,
            calories: calories,
            amount: amount
        };

        const itemsJson = localStorage.getItem('sundayMeals');
        const items = JSON.parse(itemsJson) || [];

        items.push(mealItem);

        localStorage.setItem('sundayMeals', JSON.stringify(items));
        openAddSundayMealPopup();
        refresh();

    };
    const addToMonday = (e) => {
        e.preventDefault();
        const food = e.target.food.value;
        const amount = Number(e.target.amount.value);

        const selectedMeal = meals.filter((meal, index) => index == food)
        const image = selectedMeal[0].image;
        const calories = selectedMeal[0].calories / selectedMeal[0].amount * amount;
        const mealItem = {
            id: Date.now(),
            food: food,
            image: image,
            calories: calories,
            amount: amount
        };

        const itemsJson = localStorage.getItem('mondayMeals');
        const items = JSON.parse(itemsJson) || [];

        items.push(mealItem);

        localStorage.setItem('mondayMeals', JSON.stringify(items));
        openAddMondayMealPopup();
        refresh();

    };
    const addToTuesday = (e) => {
        e.preventDefault();
        const food = e.target.food.value;
        const amount = Number(e.target.amount.value);

        const selectedMeal = meals.filter((meal, index) => index == food)
        const image = selectedMeal[0].image;
        const calories = selectedMeal[0].calories / selectedMeal[0].amount * amount;
        const mealItem = {
            id: Date.now(),
            food: food,
            image: image,
            calories: calories,
            amount: amount
        };


        const itemsJson = localStorage.getItem('tuesdayMeals');
        const items = JSON.parse(itemsJson) || [];

        items.push(mealItem);

        localStorage.setItem('tuesdayMeals', JSON.stringify(items));
        openAddTuesdayMealPopup();
        refresh();

    };
    const addToWednesday = (e) => {
        e.preventDefault();
        const food = e.target.food.value;
        const amount = Number(e.target.amount.value);

        const selectedMeal = meals.filter((meal, index) => index == food)
        const image = selectedMeal[0].image;
        const calories = selectedMeal[0].calories / selectedMeal[0].amount * amount;
        const mealItem = {
            id: Date.now(),
            food: food,
            image: image,
            calories: calories,
            amount: amount
        };

        const itemsJson = localStorage.getItem('wednesdayMeals');
        const items = JSON.parse(itemsJson) || [];

        items.push(mealItem);

        localStorage.setItem('wednesdayMeals', JSON.stringify(items));
        openAddWednesdayMealPopup();
        refresh();

    };
    const addToThursday = (e) => {
        e.preventDefault();
        const food = e.target.food.value;
        const amount = Number(e.target.amount.value);

        const selectedMeal = meals.filter((meal, index) => index == food)
        const image = selectedMeal[0].image;
        const calories = selectedMeal[0].calories / selectedMeal[0].amount * amount;
        const mealItem = {
            id: Date.now(),
            food: food,
            image: image,
            calories: calories,
            amount: amount
        };

        const itemsJson = localStorage.getItem('thursdayMeals');
        const items = JSON.parse(itemsJson) || [];

        items.push(mealItem);

        localStorage.setItem('thursdayMeals', JSON.stringify(items));
        openAddThursdayMealPopup();
        refresh();

    };
    const addToFriday = (e) => {
        e.preventDefault();
        const food = e.target.food.value;
        const amount = Number(e.target.amount.value);

        const selectedMeal = meals.filter((meal, index) => index == food)
        const image = selectedMeal[0].image;
        const calories = selectedMeal[0].calories / selectedMeal[0].amount * amount;
        const mealItem = {
            id: Date.now(),
            food: food,
            image: image,
            calories: calories,
            amount: amount
        };

        const itemsJson = localStorage.getItem('fridayMeals');
        const items = JSON.parse(itemsJson) || [];

        items.push(mealItem);

        localStorage.setItem('fridayMeals', JSON.stringify(items));
        openAddFridayMealPopup();
        refresh();

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
                                            <input type='radio' name="tabs-container" id={day} key={day} value={day} />
                                            <label htmlFor={day}>{day}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {
                            chosedDay === DAYS[0] &&
                            <div>
                                <DayMeals openAddDayMealPopup={openAddSaturdayMealPopup} >
                                    {
                                        saturdayMeals.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })}
                                </DayMeals>
                                {
                                    localStorage.saturdayMeals &&
                                    <p>
                                        Total Colories: {calculateSaturdayCalories()} &nbsp;
                                        number of meals: {JSON.parse(localStorage.saturdayMeals).length}
                                    </p>
                                }
                            </div>
                        }
                        {
                            chosedDay === DAYS[1] &&
                            <div>
                                <DayMeals openAddDayMealPopup={openAddSundayMealPopup} >
                                    {
                                        sundayMeals.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })}
                                </DayMeals>
                                {
                                    localStorage.sundayMeals &&
                                    <p>
                                        Total Colories: {calculateSundayCalories()} &nbsp;
                                        number of meals: {JSON.parse(localStorage.sundayMeals)?.length}
                                    </p>
                                }

                            </div>
                        }
                        {
                            chosedDay === DAYS[2] &&
                            <div>

                                <DayMeals openAddDayMealPopup={openAddMondayMealPopup} >
                                    {
                                        mondayMeals.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })}
                                </DayMeals>
                                {
                                    localStorage.mondayMeals &&
                                    <p>
                                    Total Colories: {calculateMondayCalories()} &nbsp;
                                    number of meals: {JSON.parse(localStorage.mondayMeals).length}
                                </p>
                                }
                                
                            </div>
                        }
                        {
                            chosedDay === DAYS[3] &&
                            <div>

                                <DayMeals openAddDayMealPopup={openAddTuesdayMealPopup} >
                                    {
                                        tuesdayMeals.map((meal, index) => {
                                            return (
                                                <div>
                                                    <MealItem item={meal}
                                                        key={index} />
                                                </div>

                                            )
                                        })}
                                </DayMeals>
                                {
                                    localStorage.tuesdayMeals &&
                                    <p>
                                        Total Colories: {calculateTuesdayCalories()} &nbsp;
                                        number of meals: {JSON.parse(localStorage.tuesdayMeals)?.length}
                                    </p>
                                }
                            </div>
                        }
                        {
                            chosedDay === DAYS[4] &&
                            <div>

                                <DayMeals openAddDayMealPopup={openAddWednesdayMealPopup} >
                                    {
                                        wednesdayMeals.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })}
                                </DayMeals>
                                {
                                    localStorage.wednesdayMeals &&
                                    <p>
                                        Total Colories: {calculateWednesdayCalories()} &nbsp;
                                        number of meals: {JSON.parse(localStorage.wednesdayMeals)?.length}
                                    </p>
                                }
                            </div>
                        }
                        {
                            chosedDay === DAYS[5] &&
                            <div>

                                <DayMeals openAddDayMealPopup={openAddThursdayMealPopup} >
                                    {
                                        thursdayMeals.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })}
                                </DayMeals>
                                {
                                    localStorage.thursdayMeals &&
                                    <p>
                                        Total Colories: {calculateThursdayCalories()} &nbsp;
                                        number of meals: {JSON.parse(localStorage.thursdayMeals)?.length}
                                    </p>
                                }
                            </div>
                        }
                        {
                            chosedDay === DAYS[6] &&
                            <div>
                                <DayMeals openAddDayMealPopup={openAddFridayMealPopup} >
                                    {
                                        fridayMeals.map((meal, index) => {
                                            return (
                                                <MealItem item={meal}
                                                    key={index} />
                                            )
                                        })}
                                </DayMeals>
                                {
                                    localStorage.fridayMeals &&
                                    <p>
                                        Total Colories: {calculateFridayCalories()} &nbsp;
                                        number of meals: {JSON.parse(localStorage.fridayMeals)?.length}
                                    </p>
                                }
                            </div>
                        }

                    </div>
                </div>
                <div className="buttom-container">
                    <button type="submit" className="buttons">Add Patient</button>
                </div>
            </form>
            <PopupMeal
                openAddButton={addToSaturdayButton}
                openAddDayMealPopup={openAddSaturdayMealPopup}
                addHandler={addToSaturday}
                title="Add Saturday Meal"
                submit="Add"
            />
            <PopupMeal
                openAddButton={addToSundayButton}
                openAddDayMealPopup={openAddSundayMealPopup}
                addHandler={addToSunday}
                title="Add Sunday Meal"
                submit="Add"
            />
            <PopupMeal
                openAddButton={addToMondayButton}
                openAddDayMealPopup={openAddMondayMealPopup}
                addHandler={addToMonday}
                title="Add Monday Meal"
                submit="Add"
            />
            <PopupMeal
                openAddButton={addToTuesdayButton}
                openAddDayMealPopup={openAddTuesdayMealPopup}
                addHandler={addToTuesday}
                title="Add Tuesday Meal"
                submit="Add"
            />
            <PopupMeal
                openAddButton={addToWednesdayButton}
                openAddDayMealPopup={openAddWednesdayMealPopup}
                addHandler={addToWednesday}
                title="Add Wednesday Meal"
                submit="Add"
            />
            <PopupMeal
                openAddButton={addToThursdayButton}
                openAddDayMealPopup={openAddThursdayMealPopup}
                addHandler={addToThursday}
                title="Add Thursday Meal"
                submit="Add"
            />
            <PopupMeal
                openAddButton={addToFridayButton}
                openAddDayMealPopup={openAddFridayMealPopup}
                addHandler={addToFriday}
                title="Add Friday Meal"
                submit="Add"
            />

        </div>

    )
}

export default NewDietProgram;