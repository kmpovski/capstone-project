import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/page/home/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Booking from './components/page/booking/Booking';
import ConfirmedBooking from './components/page/booking/ConfirmedBooking';
import WorkingOn from './components/page/working/WorkingOn';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/home'} element={<Home />} />
          <Route path={'/about'} element={<WorkingOn />} />
          <Route path={'/menu'} element={<WorkingOn />} />
          <Route path={'/reservations'} element={<Booking />} />
          <Route path={'/reservation-confirmed'} element={<ConfirmedBooking />} />
          <Route path={'/order'} element={<WorkingOn />} />
          <Route path={'/login'} element={<WorkingOn />} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
