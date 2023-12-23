import React, { useState, useEffect } from 'react';

function Organizer() {
  const [organizers, setOrganizers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/organizers/')
      .then(response => response.json())
      .then(data => setOrganizers(data))
      .catch(error => console.error('Error:', error));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <ul>
        {organizers.map(organizer => (
          <li key={organizer.id}>
            {organizer.first_name} {organizer.last_name} - @{organizer.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Organizer;
