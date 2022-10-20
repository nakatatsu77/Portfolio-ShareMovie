import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import { useNavigate, Navigate } from 'react-router-dom';

export const SharePage = () => {

  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate('/login/');
  };

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/login/`} />
          ) : (
            <div>
              <p>Shareページです</p>
              <p>{user?.email}</p>
              <button onClick={logout}>ログアウト</button>
            </div>
          )}
        </>
      )}
    </>
  );
};
