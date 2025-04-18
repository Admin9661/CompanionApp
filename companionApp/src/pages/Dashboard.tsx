import React from 'react';
import { FaUniversity, FaBell, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1>🎓 Welcome to <span>Campus Companion</span></h1>
      <p className="tagline">Your all-in-one student assistant 🧠✨</p>

      <div className="features">
        <a href='/tpoupdates'>
            <div className="feature-card">
                <FaUniversity className="feature-icon" />
                <h3>University Updates</h3>
                <p>Stay in sync with all TPO and academic announcements 📢</p>
            </div>
        </a>
        <a href='/events'>
            <div className="feature-card">
                <FaCalendarAlt className="feature-icon" />
                <h3>Events Tracker</h3>
                <p>Never miss out on college events, fests, and activities 📅</p>
            </div>
        </a>
        <a href='/reminders'>
            <div className="feature-card">
                <FaBell className="feature-icon" />
                <h3>Reminders</h3>
                <p>Set academic or personal reminders to stay sharp ⏰</p>
            </div>
        </a>
        <a href='/'>
            <div className="feature-card">
                <FaClipboardList className="feature-icon" />
                <h3>Dashboard View</h3>
                <p>One place to view everything that matters to students 🧾</p>
            </div>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
