import Input from '../../../common/input/input.component';
import Popup from '../popup/popup.component';
import './popup-content.css';

const PopupContent = (props) => {
    return(
        <Popup trigger={props.openPopupButton}>
                <div className="content">
                    <span className="close" onClick={props.handleAddClick}>&times;</span>
                    <h3>{props.title}</h3>
                    <form onSubmit={props.addHandler}>
                        <div>
                            {props.children}
                            <Input type="text" label="Food Name" name="food"  />
                            <Input type="text" label="Image URL" name="image"  />
                            <Input type="number" label="Calories" name="calories" min={0}  />
                            <Input type="number" label="Amount (in grams)" name="amount" min={0}  />
                            <button type="submit" className="buttons" value="add">{props.submit}</button>
                        </div>
                    </form>
                </div>
            </Popup>
    )
}

export default PopupContent;