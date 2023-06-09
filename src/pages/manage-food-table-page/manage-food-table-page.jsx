import { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import MealItem from "../../components/cards/meal-item/meal-item.component";
import PopupContent from "../../components/popups/popup-content/popup-content.component";
import PopupUpdate from "../../components/popups/popup-update/popup-update.component";
import './manage-food-table.css'

const ManageFoodTable = (props) => {
    const [openPopupButton, setOpenPupupButton] = useState(false);
    const [openPopupForUpdate, setOpenPopupForUpdate] = useState(false);
    const [triggerUpdate, setTriggerUpdate] = useState(false);
    const foodTable = [];
    const [foodItems, setFoodItems] = useState(foodTable);

    const getFoodItems = () => {
        const items = JSON.parse(localStorage.foods || '[]');
        setFoodItems(items);
    };

    useEffect(() => {
        getFoodItems();
    }, []);

    useEffect(()=>{
        if(triggerUpdate){
            getFoodItems();
            setTriggerUpdate(false);
        }
    },[triggerUpdate])

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

        setTriggerUpdate(true);

    };

    const handleAddClick = () => {
        setOpenPupupButton(!openPopupButton);
    };

    const deleteItem = (i) => {
        let itemsJson = JSON.parse(localStorage.getItem('foods')) || [];
        itemsJson.splice(i, 1);
        localStorage.setItem('foods', JSON.stringify(itemsJson));
        setTriggerUpdate(true);
    };

    const openUpdateItem = (i) => {
        setOpenPopupForUpdate(!openPopupForUpdate);
        const itemToUpdate = foodItems.filter((meal, index) =>  index === i )
        localStorage.setItem('temporaryItem', JSON.stringify(itemToUpdate));
    };

    const nameUpdateHandler = (e) => {
        e.preventDefault();
        const newFood = e.target.food.value;
        let itemToUpdate = JSON.parse(localStorage.getItem('temporaryItem')) || [];
        let itemsJson = JSON.parse(localStorage.getItem('foods')) || [];
        itemsJson.forEach((item, index) => { 
            if(itemToUpdate[0].id=== item.id){
                item.food=newFood;
            }   
        });
        localStorage.setItem('foods', JSON.stringify(itemsJson));
        localStorage.removeItem('temporaryItem')
        setTriggerUpdate(true);
    };
    const imageUpdateHandler = (e) => {
        e.preventDefault();
        const newImage = e.target.image.value;
        let itemToUpdate = JSON.parse(localStorage.getItem('temporaryItem')) || [];
        let itemsJson = JSON.parse(localStorage.getItem('foods')) || [];
        itemsJson.forEach((item, index) => { 
            if(itemToUpdate[0].id=== item.id){
                item.image=newImage;
            }   
        });
        localStorage.setItem('foods', JSON.stringify(itemsJson));
        localStorage.removeItem('temporaryItem')
        setTriggerUpdate(true);
    };
    const caloriesUpdateHandler = (e) => {
        e.preventDefault();
        const newCalories = e.target.calories.value;
        let itemToUpdate = JSON.parse(localStorage.getItem('temporaryItem')) || [];
        let itemsJson = JSON.parse(localStorage.getItem('foods')) || [];
        itemsJson.forEach((item, index) => { 
            if(itemToUpdate[0].id=== item.id){
                item.calories=newCalories;
            }   
        });
        localStorage.setItem('foods', JSON.stringify(itemsJson));
        localStorage.removeItem('temporaryItem')
        setTriggerUpdate(true);
    };
    const amountUpdateHandler = (e) => {
        e.preventDefault();
        const newAmount = e.target.amount.value;
        let itemToUpdate = JSON.parse(localStorage.getItem('temporaryItem')) || [];
        let itemsJson = JSON.parse(localStorage.getItem('foods')) || [];
        itemsJson.forEach((item, index) => { 
            if(itemToUpdate[0].id=== item.id){
                item.amount=newAmount;
            }   
        });
        localStorage.setItem('foods', JSON.stringify(itemsJson));
        localStorage.removeItem('temporaryItem')
        setTriggerUpdate(true);
    };


    return (
        <div className="page">
            <Header/>
            <button className="buttons" onClick={handleAddClick}>Add food Item</button>
            <div className="cards-container">
                {
                    foodItems.map((item, index) => {
                        return (
                            <MealItem
                                item={item}
                                key={index}
                                trash
                                update
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
            <PopupUpdate
                openPopupButton={openPopupForUpdate}
                handleAddClick={openUpdateItem}
                nameUpdateHandler={nameUpdateHandler}
                imageUpdateHandler={imageUpdateHandler}
                caloriesUpdateHandler={caloriesUpdateHandler}
                amountUpdateHandler={amountUpdateHandler}
            />
        </div>

    )
}

export default ManageFoodTable;