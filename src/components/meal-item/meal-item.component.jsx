import Card from '../meal-card/card.component';
import './meal-item.css';

const MealItem = (props) => {
    return (
            <Card>
                
                <span className='card-left'>
                    <img src={props.item.image} alt="food" className='food-image'/>
                </span>
                <span className='card-right'>
                    <p><b>Food:</b> {props.item.food}<br /><b>Calories:</b> {props.item.calories}<br /><b>Amount:</b> {props.item.amount}</p>
                    {/* <p>Calories: {props.item.calories}</p>
                    <p>Amount: {props.item.amount}</p> */}
                </span>
                <span>
                    <span className="delete" onClick={props.deleteItem}>&times;</span>
                    <span className="update" onClick={props.updateItem}>&#x270E;</span>                    
                </span>
                

            </Card>

    )
}

export default MealItem;