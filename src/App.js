import { createContext } from 'react';
import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home-page';
import Login from './pages/login-page/login-page';
import ManageFoodTable from './pages/manage-food-table-page/manage-food-table-page';
import NewDietProgram from './pages/new-diett-program-page/new-diet-program-page';
import NotFound from './pages/not-found/not-found-page';
import ViewProgram from './pages/view-programs/view-programs-page';

export const UserContext = createContext(null);

function App() {
  const initialUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);

  const setUserOverride = user => {
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <UserContext.Provider value={{ user, setUser: setUserOverride }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login user={user} setUser={setUser} />} />
          <Route path='/manage-food-table' element={<ManageFoodTable user={user} />} />
          <Route path='/new-diet-program' element={<NewDietProgram user={user} />} />
          <Route path='/view-program' element={<ViewProgram user={user} />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
