import { useEffect, useState } from "react";
import Input from "../../common/input/input.component";
import Header from "../../components/header/header.component";
import MealItem from "../../components/meal-item/meal-item.component";
import PopupContent from "../../components/popup-content/popup-content.component";
import './manage-food-table.css'


const ManageFoodTable = (props) => {
    const [openPopupButton, setOpenPupupButton] = useState(false);
    const [openPopupForUpdate, setOpenPopupForUpdate] = useState(false);
    const foodTable = [];
    const [foodItems, setFoodItems] = useState(foodTable);
    const refresh = () => window.location.reload(true);

    const getFoodItems = () => {
        const items = JSON.parse(localStorage.foods || '[]');
        setFoodItems(items);
    };

    useEffect(() => {
        getFoodItems();
    }, [])

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

        const itemsJson = localStorage.getItem('foods');
        const items = JSON.parse(itemsJson) || [];

        items.push(foodItem);

        localStorage.setItem('foods', JSON.stringify(items));

        setOpenPupupButton(false);

        refresh();

    };

    const handleAddClick = () => {
        setOpenPupupButton(!openPopupButton);
    };

    const deleteItem = (i) => {
        let itemsJson = JSON.parse(localStorage.getItem('foods')) || [];
        itemsJson.splice(i, 1);
        localStorage.setItem('foods', JSON.stringify(itemsJson));
        refresh();
    };

    const openUpdateItem = (i) => {
        setOpenPopupForUpdate(!openPopupForUpdate);
    };

    const updateHandler = (e) => {
        
    };


    return (
        <div className="page">
            <Header />
            <button className="buttons" onClick={handleAddClick}>Add food Item</button>
            <div className="cards-container">
                {
                    foodItems.map((item, index) => {
                        return (
                            <MealItem
                                item={item}
                                key={index}
                                deleteItem={() => deleteItem(index)}
                                updateItem={() => openUpdateItem(index)}
                            />
                        )
                    })}
                 
            </div>
            <PopupContent
                openPopupButton={openPopupButton}
                handleAddClick={handleAddClick}
                addHandler={addHandler}
                submit="Add"
                title="Add New Food Item"
            />
            <PopupContent
                openPopupButton={openPopupForUpdate}
                handleAddClick={openUpdateItem}
                addHandler={updateHandler}
                submit="update"
                title="update a food Item"
            >
                <Input type="text" label="Food You want To Update" name="updatedFood" />

            </PopupContent>
        </div>

    )
}

export default ManageFoodTable;