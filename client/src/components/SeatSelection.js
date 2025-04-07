import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiConfig from '../utils/apiConfig';

export default function SeatSelection() {
  const [selectedSeat, setSelectedSeat] = useState('');
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const res = await axios.get(`${apiConfig.seat}/seats`);
        setSeats(res.data);
      } catch (err) {
        alert('Failed to fetch seats.');
      }
    };
    fetchSeats();
  }, []);

  const handleSelect = async () => {
    const seatId = selectedSeat.trim().toUpperCase();
    const isBooked = seats.find(seat => seat.seatNumber === seatId)?.booked;

    if (!seatId || isBooked) {
      alert('Invalid or already booked seat.');
      return;
    }

    try {
      await axios.post(`${apiConfig.seat}/select-seat`, null, {
        params: {
          seatNumber: seatId,
        },
      });
      localStorage.setItem('selectedSeat', seatId);
      window.location.href = '/baggage';
    } catch (err) {
      alert('Failed to select seat.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-indigo-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">Seat Selection</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {seats.map((seat) => (
            <div
              key={seat.seatNumber}
              className={`cursor-pointer border rounded-lg p-3 text-center font-medium transition duration-200 ${
                seat.booked
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : seat.seatNumber === selectedSeat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white hover:bg-indigo-100'
              }`}
              onClick={() => !seat.booked && setSelectedSeat(seat.seatNumber)}
            >
              {seat.seatNumber}
            </div>
          ))}
        </div>
        <button
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
          onClick={handleSelect}
        >
          Confirm Seat
        </button>
      </div>
    </div>
  );
}
