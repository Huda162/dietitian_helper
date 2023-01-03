import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home-page';
import ManageFoodTable from './pages/manage-food-table-page/manage-food-table-page';
import NewDietProgram from './pages/new-diett-program-page/new-diet-program-page';
import NotFound from './pages/not-found/not-found-page';
import ViewProgram from './pages/view-programs/view-programs-page';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/manage-food-table' element={<ManageFoodTable/>}/>
      <Route path='/new-diet-program' element={<NewDietProgram/>}/>
      <Route path='/view-program' element={<ViewProgram/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
