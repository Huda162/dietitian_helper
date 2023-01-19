import AddCard from '../cards/add-card/add-card.component';
import './day-meals.css';

const DayMeals = (props) => {
    return (
        <div className='tab'>
            {props.children}
            <AddCard openAddDayMealPopup={props.openAddDayMealPopup}></AddCard>
            {
                <p className='statistics'>
                    Total Colories: {props.cal()} &nbsp;
                    number of meals: {props.mealsNumber()}
                </p>
            }
        </div>
    )
}

export default DayMeals;