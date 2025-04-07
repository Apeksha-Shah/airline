import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiConfig from '../utils/apiConfig';

export default function PaymentPage() {
  const [amount, setAmount] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [passengerInfo, setPassengerInfo] = useState({
    passengerName: '',
    flightNumber: '',
    selectedSeat: '',
    baggageInfo: '',
  });

  useEffect(() => {
    const passengerName = localStorage.getItem('passengerName') || 'N/A';
    const flightNumber = localStorage.getItem('flightNumber') || 'N/A';
    const selectedSeat = localStorage.getItem('selectedSeat') || 'N/A';
    const baggageInfo = localStorage.getItem('baggageInfo') || 'N/A';

    setPassengerInfo({
      passengerName,
      flightNumber,
      selectedSeat,
      baggageInfo,
    });
  }, []);

  const handlePay = async () => {
    if (!amount || isNaN(amount)) {
      alert('Please enter a valid amount.');
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append('amount', amount);

      const response = await axios.post(`${apiConfig.payment}/pay`, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      setConfirmationMessage(response.data);
    } catch (err) {
      alert('Payment failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">Proceed to Payment</h2>

        <div className="mb-4 space-y-1">
          <p><strong>Passenger Name:</strong> {passengerInfo.passengerName}</p>
          <p><strong>Flight Number:</strong> {passengerInfo.flightNumber}</p>
          <p><strong>Selected Seat:</strong> {passengerInfo.selectedSeat}</p>
          <p><strong>Baggage Info:</strong> {passengerInfo.baggageInfo}</p>
        </div>

        <input
          type="number"
          placeholder="Enter Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
          onClick={handlePay}
        >
          Pay ₹{amount || '___'}
        </button>

        {confirmationMessage && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 border border-green-300 rounded-lg">
            {confirmationMessage}
          </div>
        )}
      </div>
    </div>
  );
}
