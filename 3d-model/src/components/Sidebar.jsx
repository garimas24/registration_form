import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ activeModel, setActiveModel }) => {
  const [favModel, setFavModel] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { model: favModel, name: userName, email: userEmail };
    try {
      await fetch("https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });
      alert('Submitted!');
    } catch (err) {
      console.error(err);
      alert('Submission failed');
    }
  };

  return (
    <div className="sidebar">
      <div
        className={`card ${activeModel === 'A' ? 'active' : ''}`}
        onClick={() => setActiveModel('A')}
      >
        <h4>Model A</h4>
        <p>Details about Model A</p>
      </div>
      <div
        className={`card ${activeModel === 'B' ? 'active' : ''}`}
        onClick={() => setActiveModel('B')}
      >
        <h4>Model B</h4>
        <p>Details about Model B</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Favorite Model</label>
        <select
          value={favModel}
          onChange={(e) => setFavModel(e.target.value)}
          required
        >
          <option value="">Choose...</option>
          <option value="Model A">Model A</option>
          <option value="Model B">Model B</option>
        </select>

        <label>Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Sidebar;
