import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckinPage from './components/CheckinPage';
import SeatSelection from './components/SeatSelection';
import BaggageForm from './components/BaggageForm';
import PaymentPage from './components/PaymentPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CheckinPage />} />
        <Route path="/seat-selection" element={<SeatSelection />} />
        <Route path="/baggage" element={<BaggageForm />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}
