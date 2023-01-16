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
                    <p><b>Food:</b> {props.item.food}<br /><b>Calories:</b> {props.item.calories}<br /><b>Amount:</b> {props.item.amount}</p>
                    {/* <p>Calories: {props.item.calories}</p>
                    <p>Amount: {props.item.amount}</p> */}
                </span>
                <span>
                    {/* <span className="delete" onClick={props.deleteItem}>&times;</span>
                    <span className="update" >&#x270E;</span>    */}
                    <Trash size={20} onClick={props.deleteItem} className="icon"/> 
                    <PencilLine size={20} onClick={props.updateItem} className="icon"/>                
                </span>
                

            </Card>

    )
}

export default MealItem;