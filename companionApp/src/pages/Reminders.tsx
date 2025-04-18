import React, { useState, useEffect } from 'react';
import './Reminders.css';
import { ReminderType } from '../data';

const Reminders: React.FC = () => {
  const [reminders, setReminders] = useState<ReminderType[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Fetch reminders from the Flask backend
    const fetchReminders = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/reminders');
        if (response.ok) {
          const data: ReminderType[] = await response.json();
          setReminders(data);
        } else {
          console.error('Failed to fetch reminders');
        }
      } catch (error) {
        console.error('Error fetching reminders:', error);
      }
    };

    fetchReminders();
  }, []);

  const addReminder = async () => {
    const trimmed = input.trim();
    if (trimmed === '') return;

    const newReminder: ReminderType = {
      id: Date.now(),
      text: trimmed,
    };

    try {
      const response = await fetch('http://localhost:5000/reminders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReminder),
      });

      if (response.ok) {
        setReminders((prev) => [...prev, newReminder]);
        setInput('');
      } else {
        console.error('Failed to add reminder');
      }
    } catch (error) {
      console.error('Error adding reminder:', error);
    }
  };

  const deleteReminder = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/reminders/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setReminders((prev) => prev.filter((r) => r.id !== id));
      } else {
        console.error('Failed to delete reminder');
      }
    } catch (error) {
      console.error('Error deleting reminder:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addReminder();
    }
  };

  return (
    <section className="reminders">
      <h2>📌 Your Reminders</h2>

      <div className="reminder-input">
        <input
          type="text"
          placeholder="Type something and press Enter or click Add"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={addReminder}>➕ Add</button>
      </div>

      {reminders.length === 0 ? (
        <p className="empty-text">No reminders yet. Start by adding one! 📝</p>
      ) : (
        <ul className="reminder-list">
          {reminders.map((reminder) => (
            <li key={reminder.id} className="reminder-item">
              <span>{reminder.text}</span>
              <button onClick={() => deleteReminder(reminder.id)} title="Delete">
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Reminders;
