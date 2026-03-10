import { useState, useEffect } from 'react';

const UserCard = ({ userId }: { userId: number }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Cleanup flag

    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then((r) => r.json())
      .then((data) => {
        if (isMounted) {
          setName(data.name);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; }; // Cleanup on unmount
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  return <div><h2>{name}</h2></div>;
};

export default UserCard;