import Card from '../meal-card/card.component';
import './meal-item.css';
import { PencilLine, Trash } from "phosphor-react"

const MealItem = (props) => {
    return (
            <Card>
                
                <span className='card-left'>
                    <img src={props.item.image} alt="food" className='food-image'/>
                </span>
                <span className='card-right'>
                    <p><b>Food:</b> {props.item.food}<br /><b>Calories:</b> {Math.ceil(props.item.calories)}<br /><b>Amount:</b> {props.item.amount}</p>
                </span>
                <span>
                    {props.trash && <Trash size={20} onClick={props.deleteItem} className="icon"/> }
                    {props.update && <PencilLine size={20} onClick={props.updateItem} className="icon"/>}                
                </span>
            </Card>

    )
}

export default MealItem;