import MealItem from '../meal-item/meal-item.component';
import './day-meals.css';

const DayMeals = (props) => {
    return(
        <div className='tab'>
            meals
            <MealItem/>
        </div>
    )
}

export default DayMeals;