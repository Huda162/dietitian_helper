import AddCard from '../cards/add-card/add-card.component';
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