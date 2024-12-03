// src/components/ProfileCard.jsx
import React from 'react';

// ProfileCard component
const ProfileCard = ({ name, age, occupation, location }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Occupation:</strong> {occupation}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default ProfileCard;
