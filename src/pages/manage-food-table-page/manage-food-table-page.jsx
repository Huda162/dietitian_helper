import { useEffect, useState } from "react";
import Input from "../../common/input/input.component";
import Table from "../../common/table/table.component";
import Header from "../../components/header/header.component";
import Card from "../../components/meal-card/meal-card.component";
import MealItem from "../../components/meal-item/meal-item.component";
import Popup from "../../components/popup/popup.component";
import './manage-food-table.css'


const ManageFoodTable = (props) => {
    const [openPopupButton, setOpenPupupButton] = useState(false);
    const foodTable = [];
    const [foodItems, setFoodItems] = useState(foodTable);

    const getFoodItems = () =>{
        const items = JSON.parse(localStorage.foodItems || '[]');
        setFoodItems(items);
    };

    useEffect(()=>{
        getFoodItems();
    },foodItems)

    const addHandler = e => {
        e.preventDefault();
        const food = e.target.food.value;
        const image = e.target.image.value;
        const calories = Number(e.target.calories.value);
        const amount = Number(e.target.amount.value);

        const foodItem = {
            id: Date.now(),
            food: food,
            image: image,
            calories: calories,
            amount: amount
        };

        const itemsJson = localStorage.getItem('foodItems');
        const items = JSON.parse(itemsJson) || [];

        items.push(foodItem);

        localStorage.setItem('foodItems', JSON.stringify(items));

        setOpenPupupButton(false);
    };

    const handleAddClick = () => {
        setOpenPupupButton(!openPopupButton);
    };

    return (
        <div className="page">
            <Header />
            <button className="buttons" onClick={handleAddClick}>Add food Item</button>
            <div className="cards-container">
                {
                    foodItems.map((item, index) => {
                        return (
                            <MealItem item={item} key={index} />
                        )
                    })
                }
            </div>
            <Popup trigger={openPopupButton}>
                <div className="content">
                    <span className="close" onClick={handleAddClick}>&times;</span>
                    <h3>Adding New Food Item</h3>
                    <form onSubmit={addHandler}>
                        <div>
                            <Input type="text" label="Food Name" name="food" required/>
                            <Input type="text" label="Image URL" name="image" required/>
                            <Input type="number" label="Calories" name="calories" min={0} required/>
                            <Input type="number" label="Amount (in grams)" name="amount" min={0} required/>
                            <button type="submit" className="buttons" value="add">Add</button>
                        </div>
                    </form>
                </div>
            </Popup>
        </div>

    )
}

export default ManageFoodTable;