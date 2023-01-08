import AddCard from '../add-card/add-card.component';
import MealItem from '../meal-item/meal-item.component';
import './day-meals.css';

const DayMeals = (props) => {
    return(
        <div className='tab'>
            {props.children}
            <AddCard openAddDayMealPopup={props.openAddDayMealPopup}></AddCard>
        </div>
    )
}

export default DayMeals;