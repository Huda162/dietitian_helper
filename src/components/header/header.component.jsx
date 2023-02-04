import { SignOut } from 'phosphor-react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../assets/app-logo.png';
import './header.css';

const Header = (props) => {
    const location = useLocation();
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div className='header'>
            <span className='left'>
                <img src={logo} alt="dietitian" className='app-logo' />
                <h2 className='app-name'>Dietitian Helper</h2>
            </span>
            {
                userContext.user && <span className='middle'>
                   <h4>Dr.{userContext.user.name}</h4>  &nbsp;
                    <SignOut size={24} color="#48834b" className='logout-icon' 
                    onClick={() => {
                        userContext.setUser(null);
                        navigate('/login');
                    }}
                    />
                </span>
                
            }
            <span className='right'>
                <Link to='/home' className='navigation-buttons'>Home</Link> &nbsp;  &nbsp;
                <Link to='/new-diet-program' className={location.pathname === '/new-diet-program' ? 'navigation-buttons current' : 'navigation-buttons'}>New Diet Program</Link> &nbsp;  &nbsp;
                <Link to='/manage-food-table' className={location.pathname === '/manage-food-table' ? 'navigation-buttons current' : 'navigation-buttons'}>Manage Food Table</Link> &nbsp;  &nbsp;
                <Link to='/view-program' className={location.pathname === '/view-program' ? 'navigation-buttons current' : 'navigation-buttons'}>view Existing Program</Link>
            </span>
        </div>
    );
}

export default Header;
