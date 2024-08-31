import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EducationPage.css'; // Ensure to create a corresponding CSS file for styling

const EducationPage = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch educational resources from the backend API
    const fetchResources = async () => {
      try {
        const response = await axios.get('/api/educational-resources'); // Replace with actual endpoint
        setResources(response.data);
      } catch (error) {
        setError('Error fetching educational resources. Please try again later.');
        console.error('Error fetching educational resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="education-page">
      <h1>Educational Resources</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="resources-list">
        {resources.length > 0 ? (
          <ul>
            {resources.map((resource) => (
              <li key={resource.id}>
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
                {resource.type === 'video' && (
                  <iframe 
                    width="560" 
                    height="315" 
                    src={resource.url} 
                    title={resource.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                )}
                {resource.type === 'article' && (
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">Read More</a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No educational resources available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default EducationPage;
