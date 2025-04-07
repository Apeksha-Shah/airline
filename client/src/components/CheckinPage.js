import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import apiConfig from '../utils/apiConfig';

export default function CheckinPage() {
  const [name, setName] = useState('');
  const [flight, setFlight] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!name.trim() || !flight.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    localStorage.setItem('passengerName', name);
    localStorage.setItem('flightNumber', flight);

    try {
      await axios.post(`${apiConfig.checkin}/checkin`, { name, flight });
      navigate('/seat-selection');
    } catch (err) {
      alert('Check-in failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">Passenger Check-in</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Flight Number"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={flight}
          onChange={(e) => setFlight(e.target.value)}
        />
        <button
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
          onClick={handleSubmit}
        >
          Check-in
        </button>
      </div>
    </div>
  );
}
