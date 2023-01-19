import { useEffect, useMemo, useRef, useState } from "react";

const useAddDayMeal = (addToDayButton, chosedDay)=>{
    let initialMeals = [];
    const [meals, setMeals] = useState(initialMeals);
    const [triggerUpdate, setTriggerUpdate] = useState(false);
    const saturdayMeals = useRef(initialMeals);
    const sundayMeals = useRef(initialMeals);
    const mondayMeals = useRef(initialMeals);
    const tuesdayMeals = useRef(initialMeals);
    const wednesdayMeals = useRef(initialMeals);
    const thursdayMeals = useRef(initialMeals);
    const fridayMeals = useRef(initialMeals);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(() => {
        if (triggerUpdate) {
            calculateTotalCalories();
            setTriggerUpdate(false);
        }
    }, [triggerUpdate]);

    const submit = (e) => {
        e.preventDefault();
        const foodIndex = e.target.food.value;
        const amount = Number(e.target.amount.value);
        const selectedMeal = meals.filter((meal, index) => index == foodIndex);
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
                saturdayMeals.current = satAfterAddition;
                break;
            case 'Sunday':
                const sunAfterAddition = [...sundayMeals, mealItem];
                sundayMeals.current=sunAfterAddition;
                break;
            case 'Monday':
                const monAfterAddition = [...mondayMeals, mealItem];
                mondayMeals.current=monAfterAddition;
                break;
            case 'Tuesday':
                const tueAfterAddition = [...tuesdayMeals, mealItem];
                tuesdayMeals.current=tueAfterAddition;
                break;
            case 'Wednesday':
                const wenAfterAddition = [...wednesdayMeals, mealItem];
                wednesdayMeals.current=wenAfterAddition;
                break;
            case 'Thursday':
                const thuAfterAddition = [...thursdayMeals, mealItem];
                thursdayMeals.current=thuAfterAddition;
                break;
            case 'Friday':
                const friAfterAddition = [...fridayMeals, mealItem];
                fridayMeals.current=friAfterAddition;
                break;
            default:
                break;
        }
        setTriggerUpdate(false);
    };

    // const cachedMeals = useMemo(()=>{
        
    // }, [saturdayMeals, sundayMeals, mondayMeals, tuesdayMeals, wednesdayMeals, thursdayMeals, fridayMeals])

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
        setTotalCalories(Math.round(total));
    }

    const calculateDayCalories = () => {
        let totalDayCal = 0;
        switch (chosedDay) {
            case 'Saturday':
                saturdayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.round(totalDayCal);
            case 'Sunday':
                sundayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.round(totalDayCal);
            case 'Monday':
                mondayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.round(totalDayCal);
            case 'Tuesday':
                tuesdayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.round(totalDayCal);
            case 'Wednesday':
                wednesdayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.round(totalDayCal);
            case 'Thursday':
                thursdayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.round(totalDayCal);
            case 'Friday':
                fridayMeals.forEach(meal => {
                    totalDayCal = totalDayCal + meal.calories;
                })
                return Math.round(totalDayCal);
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

    return{
        saturdayMeals: {value:saturdayMeals.current},
        sundayMeals: {value:sundayMeals.current},
        mondayMeals: {value:mondayMeals.current},
        tuesdayMeals: {value:tuesdayMeals.current},
        wednesdayMeals: {value:wednesdayMeals.current},
        thursdayMeals: {value:thursdayMeals.current},
        fridayMeals: {value:fridayMeals.current}
    };
}

export default useAddDayMeal;


