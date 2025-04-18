import React, { useState, useEffect } from 'react';
import './TPOUpdates.css';
import { TPOUpdateType } from '../data';

const TPOUpdates: React.FC = () => {
  const [updates, setUpdates] = useState<TPOUpdateType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/tpoupdates');
        if (!response.ok) {
          throw new Error('Failed to fetch updates');
        }
        const data: TPOUpdateType[] = await response.json();
        setUpdates(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUpdates();
  }, []);

  const toggleReadStatus = (id: number) => {
    setUpdates(prev =>
      prev.map(update =>
        update.id === id ? { ...update, isRead: !update.isRead } : update
      )
    );
  };

  if (loading) {
    return <p>Loading updates...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="tpo-updates">
      <h2>📢 TPO Announcements</h2>

      {updates.length === 0 ? (
        <p className="empty-text">No TPO updates yet. Stay tuned! 📅</p>
      ) : (
        <ul className="update-list">
          {updates.map((update) => (
            <li key={update.id} className={`update-item ${update.isRead ? 'read' : ''}`}>
              <p>{update.message}</p>
              <button
                onClick={() => toggleReadStatus(update.id)}
                className={`read-btn ${update.isRead ? 'active' : ''}`}
                title={update.isRead ? 'Mark as unread' : 'Mark as read'}
              >
                {update.isRead ? '✔️' : '🔲'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TPOUpdates;
