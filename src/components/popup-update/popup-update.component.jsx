import Input from '../../common/input/input.component';
import Popup from '../popup/popup.component';
import './popup-update.css';

const PopupUpdate = (props) => {
    return (
        <Popup trigger={props.openPopupButton}>
            <div className="content">
                <span className="close" onClick={props.handleAddClick}>&times;</span>
                <h3>Update Food Item</h3>
                <form onSubmit={props.nameUpdateHandler}>
                    <div className='update-field'>
                        <Input type="text" label="Food Name" name="food" />
                        <button type="submit" className="update-buttons" value="updateName">update name</button>
                    </div>
                </form>
                <form onSubmit={props.imageUpdateHandler}>
                    <div className='update-field'>
                        <Input type="text" label="Image URL" name="image" />
                        <button type="submit" className="update-buttons" value="updateImage">update image</button>
                    </div>
                </form>
                <form onSubmit={props.caloriesUpdateHandler}>
                    <div className='update-field'>
                        <Input type="number" label="Calories" name="calories" min={0} />
                        <button type="submit" className="update-buttons" value="updateCalories">update calories</button>
                    </div>
                </form>
                <form onSubmit={props.amountUpdateHandler}>
                    <div className='update-field'>
                        <Input type="number" label="Amount (in grams)" name="amount" min={0} />
                        <button type="submit" className="update-buttons" value="updateAmount">update amount</button>
                    </div>
                </form>

            </div>
        </Popup>
    )
}

export default PopupUpdate;

{/* <div>
                        {props.children}
                        <Input type="text" label="Food Name" name="food" />
                        <Input type="text" label="Image URL" name="image" />
                        <Input type="number" label="Calories" name="calories" min={0} />
                        <Input type="number" label="Amount (in grams)" name="amount" min={0} />
                        <button type="submit" className="buttons" value="add">{props.submit}</button>
                    </div> */}