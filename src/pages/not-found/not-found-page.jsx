import './not-found.css';
import { SmileyXEyes } from "phosphor-react";

const NotFound = () => {
    return (
        <div className="not-found">
            <SmileyXEyes size={500} color="#48834b" display="block"/>
            <br />
            <p className='not-found-text'>&nbsp;&nbsp;&nbsp;&nbsp;page not found</p>
        </div>
    )
}

export default NotFound;