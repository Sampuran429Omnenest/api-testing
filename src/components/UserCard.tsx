// src/components/UserCard.tsx
import { useState, useEffect } from 'react';

const UserCard = ({ userId }: { userId: number }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then(r => r.json())
      .then(data => { setName(data.name); setLoading(false); });
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  return <div><h2>{name}</h2></div>;
};

export default UserCard;
