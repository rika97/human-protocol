import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const LinkedInCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');

    if (code) {
      fetch('/api/linkedin/exchange-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        navigate('/auth');
        return response.json();
      })
      
      .then(data => {
        console.log(data)
        navigate('/auth');
      })
      .catch(error => {
        console.error('Error:', error);
        navigate('/auth');
      });
    }
    
  }, [location, navigate]);

  return (
    <div>
      Processing LinkedIn authentication...
    </div>
  );
};
