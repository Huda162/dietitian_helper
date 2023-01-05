import './popup.css';

const Popup = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='content'>
                {props.children}
            </div>

        </div>
    ) : "";
};

export default Popup;