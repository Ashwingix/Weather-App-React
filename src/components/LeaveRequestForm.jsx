import React, { useState } from 'react';

function LeaveRequestForm() {
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Date:', date);
    console.log('Reason:', reason);
    // You can make an API call here to submit the leave request
  };

  return (
    <div>
      <h2>Half-Day Leave Request</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br />
        <label>Reason:</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default LeaveRequestForm;
