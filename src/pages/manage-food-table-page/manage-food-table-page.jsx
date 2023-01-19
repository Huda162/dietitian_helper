import { useEffect, useState } from "react";
import Input from "../../common/input/input.component";
import Header from "../../components/header/header.component";
import MealItem from "../../components/cards/meal-item/meal-item.component";
import PopupContent from "../../components/popups/popup-content/popup-content.component";
import PopupUpdate from "../../components/popups/popup-update/popup-update.component";
import './manage-food-table.css'
import useAddFoodItem from "../../hooks/add-food-item/add-food-item.hook";


const ManageFoodTable = (props) => {
    const foodTable = [];
    const [openPopupButton, setOpenPupupButton] = useState(false);
    const [openPopupForUpdate, setOpenPopupForUpdate] = useState(false);
    const [triggerUpdate, setTriggerUpdate] = useState(false);
    const [foodItems, setFoodItems] = useState(foodTable);
    const addFoodItem = useAddFoodItem(openPopupButton);


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

    const handleAddClick = () => {
        setOpenPupupButton(!openPopupButton);
    };

    const openUpdateItem = (i) => {
        const itemToUpdate = foodItems.filter((meal, index) =>  index == i )
        localStorage.setItem('temporaryItem', JSON.stringify(itemToUpdate));
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
                                deleteItem={() => addFoodItem.deleteItem(index)}
                                updateItem={() => addFoodItem.openUpdateItem(index)}
                            />
                        )
                    })}

            </div>
            <PopupContent
                openPopupButton={openPopupButton}
                handleAddClick={handleAddClick}
                addHandler={()=>addFoodItem.addHandler}
                submit="Add"
                title="Add New Food Item"
            />
            <PopupUpdate
                openPopupButton={openPopupForUpdate}
                handleAddClick={openUpdateItem}
                nameUpdateHandler={()=>addFoodItem.nameUpdateHandler}
                imageUpdateHandler={()=>addFoodItem.imageUpdateHandler}
                caloriesUpdateHandler={()=>addFoodItem.caloriesUpdateHandler}
                amountUpdateHandler={()=>addFoodItem.amountUpdateHandler}
            />
        </div>

    )
}

export default ManageFoodTable;