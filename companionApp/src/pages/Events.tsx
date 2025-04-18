import React, { useState, useEffect } from 'react';
import './Events.css';
import { EventType } from '../data'; // Assuming EventType is still defined in '../data'
import axios from 'axios';

const Events: React.FC = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [search, setSearch] = useState('');
  const [sortedEvents, setSortedEvents] = useState<EventType[]>([]);

  useEffect(() => {
    // Fetch data from Flask backend
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const sorted = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    setSortedEvents(sorted);
  }, [events]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filterEvents = sortedEvents.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAttended = (id: number) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id ? { ...event, isAttended: !event.isAttended } : event
      )
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <section className="events">
      <h2 className="events-title">📅 Upcoming Events</h2>

      <input
        type="text"
        className="search-bar"
        placeholder="Search events"
        value={search}
        onChange={handleSearchChange}
      />

      {filterEvents.length === 0 ? (
        <p className="no-events">No events match your search criteria. Try again! 🧐</p>
      ) : (
        <div className="event-grid">
          {filterEvents.map((event) => (
            <div
              key={event.id}
              className={`event-card ${event.isFeatured ? 'featured' : ''} ${event.isAttended ? 'attended' : ''}`}
            >
              <h3>{event.name}</h3>
              <p className="event-date">{formatDate(event.date)}</p>
              <p className="event-description">{event.description}</p>
              <button
                onClick={() => toggleAttended(event.id)}
                className="attended-btn"
              >
                {event.isAttended ? '✔️ Attended' : 'Mark as Attended'}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Events;
