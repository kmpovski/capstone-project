import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/page/home/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Booking from './components/page/booking/Booking';
import ConfirmedBooking from './components/page/booking/ConfirmedBooking';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/home'} element={<Home />} />
          <Route path={'/about'} element={<Home />} />
          <Route path={'/menu'} element={<Home />} />
          <Route path={'/reservations'} element={<Booking />} />
          <Route path={'/reservation-confirmed'} element={<ConfirmedBooking />} />
          <Route path={'/order'} element={<Home />} />
          <Route path={'/login'} element={<Home />} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
