import { Route, Routes } from 'react-router-dom';

import HeaderNav from './components/HeaderNav';

import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import AppointmentPage from './pages/AppointmentPage'
import ProductsPage from './pages/ProductsPage'
import QuestionPage from './pages/QuestionPage'
import ContactsPage from './pages/ContactsPage'
import { AdminPage } from './pages/AdminPage';

function App() {

  return (
    <HeaderNav>
      <Routes>
        <Route path='/' element={< MainPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/appointment' element={<AppointmentPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/questiones' element={<QuestionPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </ Routes>  
    </ HeaderNav>
  );
}

export default App;
