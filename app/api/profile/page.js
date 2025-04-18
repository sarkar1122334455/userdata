'use client'

import React from 'react'
import { useState, useEffect } from 'react'

const page = () => {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await fetch('https://api-8gqs.onrender.com/api/users/profile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                if (!res.ok) throw new Error('Failed to fetch user data');
                const data = await res.json();
                setUserData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userData, loading]);

  return (
    <div>
    {loading ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Loading...</h2>
        </div>
    ) : userData ? (
        <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Profile</h1>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <img
                    src={userData.avatar || 'https://via.placeholder.com/150'}
                    alt="Profile Avatar"
                    style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ddd' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <strong>Name:</strong> <span>{userData.name || 'N/A'}</span>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <strong>Email:</strong> <span>{userData.email || 'N/A'}</span>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <strong>Username:</strong> <span>{userData.username || 'N/A'}</span>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <strong>Bio:</strong> <span>{userData.bio || 'N/A'}</span>
            </div>
        </div>
    ) : (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Failed to load user data</h2>
        </div>
    )}
    </div>
  )
}

export default page
