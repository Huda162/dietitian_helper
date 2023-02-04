import { Link } from "react-router-dom";
import logo from '../../assets/app-logo.png';
import './home.css'
const Home = (props) => {
    
    return (
        <div className="home">
            <div className="welcome">
                <span >
                    <img src={logo} alt="app-logo" className="app-logo" />
                    <h1>Welcome to Dietation Helper Home</h1>
                </span>
            </div>
            <br />
            <br />
            <br />
            <div className="buttons-area">
                <Link to='/new-diet-program' className="navigation-buttons">New Diet Program</Link>
                &nbsp;
                <Link to='/manage-food-table' className="navigation-buttons">Manage Food Table</Link>
                &nbsp;
                <Link to='/view-program' className="navigation-buttons">view Existing Program</Link>
            </div>

        </div>

    )
}

export default Home;