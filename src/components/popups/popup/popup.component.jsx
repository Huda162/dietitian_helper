import './popup.css';

const Popup = (props) => {
    return (props.trigger) ? (
        <div className='popup' onClick={props.closeHandler}>
            <div className='content'>
                {props.children}
            </div>
        </div>
    ) : "";
};

export default Popup;