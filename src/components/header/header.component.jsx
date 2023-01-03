import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/app-logo.png';
import './header.css';

const Header = (props) => {
    const location = useLocation();
    return (
        <div className='header'>
            <span className='left'>
                <img src={logo} alt="dietitian" className='app-logo' />
                <h2 className='app-name'>Dietitian Helper</h2>
            </span>
            <span className='right'>
                <Link to='/home' className='navigation-buttons'>Home</Link> &nbsp;  &nbsp;
                <Link to='/new-diet-program' className={location.pathname==='/new-diet-program'?'navigation-buttons current':'navigation-buttons'}>New Diet Program</Link> &nbsp;  &nbsp;
                <Link to='/manage-food-table' className={location.pathname==='/manage-food-table'?'navigation-buttons current':'navigation-buttons'}>Manage Food Table</Link> &nbsp;  &nbsp;
                <Link to='/view-program' className={location.pathname==='/view-program'?'navigation-buttons current':'navigation-buttons'}>view Existing Program</Link>
            </span>
        </div>
    );
}

export default Header;
