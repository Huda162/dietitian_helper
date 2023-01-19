import { useState } from "react";


const useAddFoodItem = () =>{
    const foodTable = [];
    const [foodItems, setFoodItems] = useState(foodTable);


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
    };

    const deleteItem = (i) => {
        let itemsJson = JSON.parse(localStorage.getItem('foods')) || [];
        itemsJson.splice(i, 1);
        localStorage.setItem('foods', JSON.stringify(itemsJson));
    };

    const nameUpdateHandler = (e) => {
        e.preventDefault();
        const newFood = e.target.food.value;
        let itemToUpdate = JSON.parse(localStorage.getItem('temporaryItem')) || [];
        let itemsJson = JSON.parse(localStorage.getItem('foods')) || [];
        itemsJson.forEach((item, index) => { 
            if(itemToUpdate[0].id== item.id){
                item.food=newFood;
            }   
        });
        localStorage.setItem('foods', JSON.stringify(itemsJson));
        localStorage.removeItem('temporaryItem')
    };
    const imageUpdateHandler = (e) => {
        e.preventDefault();
        const newImage = e.target.image.value;
        let itemToUpdate = JSON.parse(localStorage.getItem('temporaryItem')) || [];
        let itemsJson = JSON.parse(localStorage.getItem('foods')) || [];
        itemsJson.forEach((item, index) => { 
            if(itemToUpdate[0].id== item.id){
                item.image=newImage;
            }   
        });
        localStorage.setItem('foods', JSON.stringify(itemsJson));
        localStorage.removeItem('temporaryItem')
    };
    const caloriesUpdateHandler = (e) => {
        e.preventDefault();
        const newCalories = e.target.calories.value;
        let itemToUpdate = JSON.parse(localStorage.getItem('temporaryItem')) || [];
        let itemsJson = JSON.parse(localStorage.getItem('foods')) || [];
        itemsJson.forEach((item, index) => { 
            if(itemToUpdate[0].id== item.id){
                item.calories=newCalories;
            }   
        });
        localStorage.setItem('foods', JSON.stringify(itemsJson));
        localStorage.removeItem('temporaryItem')
    };
    const amountUpdateHandler = (e) => {
        e.preventDefault();
        const newAmount = e.target.amount.value;
        let itemToUpdate = JSON.parse(localStorage.getItem('temporaryItem')) || [];
        let itemsJson = JSON.parse(localStorage.getItem('foods')) || [];
        itemsJson.forEach((item, index) => { 
            if(itemToUpdate[0].id== item.id){
                item.amount=newAmount;
            }   
        });
        localStorage.setItem('foods', JSON.stringify(itemsJson));
        localStorage.removeItem('temporaryItem')
    };
}

export default useAddFoodItem;