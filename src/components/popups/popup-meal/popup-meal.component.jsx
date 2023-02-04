import { useEffect, useState } from 'react';
import Input from '../../../common/input/input.component';
import Select from '../../../common/select/select.component';
import Card from '../../cards/meal-card/card.component';
import Popup from '../popup/popup.component';
import './popup-meal.css';

const PopupMeal = (props) => {
    let initialMeals = [];
    const [meals, setMeals] = useState(initialMeals);
    const [selectedMeal, setSelectedMeal] = useState(0);
    const [amount, setAmount] = useState(0);

    const getFoodItems = () => {
        const items = JSON.parse(localStorage.foods || '[]');
        setMeals(items);
    };

    useEffect(() => {
        getFoodItems();
    }, []);

    const chooseMeal = (e) => {
        setSelectedMeal(e.target.value);
    };

    const takeAmount = (e) => {
        setAmount(e.target.value);
    };


    return (
        <Popup trigger={props.openAddButton}>
            <div className="content">
                <span className="close" onClick={props.openAddDayMealPopup}>&times;</span>
                <h3>{props.title}</h3>
                <form onSubmit={props.addHandler}>
                    <div>
                        <Select type="text" label="Meal" name="food" onChange={chooseMeal} defaultValue={meals[0]}
>
                            {
                                meals.map((meal, index) => {
                                    return (
                                        <option value={index} key={index}>{meal.food}</option>
                                    )
                                })
                            }
                        </Select>
                        <Input type="number" label="Amount (in grams)" name="amount" min={0} onChange={takeAmount} />
                        <br />

                        {selectedMeal ?
                            <Card>
                                <span className='card-left'>
                                    <img src={meals[selectedMeal].image} alt="food" className='food-image'/>
                                </span>
                                <span className='card-right'>
                                    <p>Total Calories: {Math.ceil(meals[selectedMeal].calories/meals[selectedMeal].amount)}*{amount} = {Math.ceil(amount * meals[selectedMeal].calories/meals[selectedMeal].amount)}</p>
                                </span>
                            </Card>
                            : (<div></div>)}
                        <button type="submit" className="buttons" value="add">{props.submit}</button>
                    </div>
                </form>
            </div >
        </Popup >
    )
}

export default PopupMeal;