import div from '../meal-card/card.component';
import './add-card.css';

const AddCard = (props) => {
    return(
        <div className="add-card" onClick={props.openAddDayMealPopup}>
            <img src="https://cdn-icons-png.flaticon.com/512/32/32339.png" alt="add" className='add-icon'/>
        </div>
    )
}

export default AddCard;