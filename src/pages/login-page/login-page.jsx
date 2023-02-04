import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../common/input/input.component';
import Popup from '../../components/popups/popup/popup.component';
import { loginUser } from '../../hooks and functions/login-user/login-user';
import logo from './../../assets/app-logo.png'
import './login-page.css';

const Login = (props) => {
    const navigate = useNavigate();
    const [wrong, setWrong] = useState(false);

    useEffect(() => {
        if (props.user?.id) {
            navigate('/home', { replace: true })
        }
    });

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();

        if (email && password) {

            const user = loginUser(email, password);
            if (user) {
                props.setUser(user);
                navigate('/home', { replace: true });
            }
            else {
                setWrong(true);
            }
        }
    };

    const closeHandler = () => {
        setWrong(false);
    }

    return (
        <div className='back'>
            <span >
                <img src={logo} alt="app-logo" className="app-logo" />
                <h1 className='texts'>Welcome to Dietation Helper App!</h1>
            </span>
            <form onSubmit={handleLogin} className='front'>
                <h1 className='texts'>Login</h1>
                <Input
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='example@example.com'
                />
                <Input
                    label='Password'
                    name='password'
                    type='password'
                />
                <div>
                    <Input
                        type='submit'
                        value='Login'
                        className='logout-button'
                    />
                </div>
                <p className='texts'>forgot password?</p>
            </form>
            <Popup trigger={wrong} closeHandler={closeHandler}>
                We are sorry! The Email or Password is wrong.
            </Popup>
        </div>
    )
}

export default Login;