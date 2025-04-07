import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiConfig from '../utils/apiConfig';

export default function BaggageForm() {
  const [weight, setWeight] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async () => {
    if (!weight || !type.trim()) {
      alert('Please fill out baggage details.');
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append('weight', weight);
      params.append('type', type);

      await axios.post(`${apiConfig.baggage}/add-baggage`, params);

      localStorage.setItem('baggageInfo', `${weight}kg - ${type}`);
      window.location.href = '/payment';
    } catch (err) {
      alert('Failed to add baggage.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-indigo-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">Add Baggage</h2>
        <input
          type="number"
          placeholder="Weight (kg)"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type (e.g. Cabin/Check-in)"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <button
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
          onClick={handleSubmit}
        >
          Add Baggage
        </button>
      </div>
    </div>
  );
}
