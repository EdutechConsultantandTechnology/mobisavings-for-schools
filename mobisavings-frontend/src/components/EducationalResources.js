import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EducationalResources = () => {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch educational resources on component mount
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('/api/educational-resources', { // Replace with actual endpoint URL
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token-based auth
          }
        });
        setResources(response.data);
      } catch (error) {
        setError('Failed to fetch educational resources.');
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="educational-resources">
      <h2>Educational Resources</h2>
      <div className="resource-list">
        {resources.map(resource => (
          <div key={resource.id} className="resource-item">
            {resource.type === 'article' && (
              <div className="resource-article">
                <h3>{resource.title}</h3>
                <p>{resource.summary}</p>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            )}
            {resource.type === 'video' && (
              <div className="resource-video">
                <h3>{resource.title}</h3>
                <iframe
                  src={resource.url}
                  title={resource.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {resource.type === 'tool' && (
              <div className="resource-tool">
                <h3>{resource.title}</h3>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">Use Tool</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalResources;
