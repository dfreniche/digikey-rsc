// src/App.js

import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import AddUser from './AddUser';
import axios from 'axios';
import SearchBar from './SearchBar';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserAdded = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleUserDeleted = (newUser) => {
    const newUsers =  [...users];
    newUsers.splice(newUser._id, 1);
    setUsers(newUsers);
  };
  
  return (
    <div className="container">
    <div className="main-layout">
      <div className="user-container">
        {/* User List */}
        <div className="userList">
         <UserList users = {users} onUserDeleted = {handleUserDeleted} />
        </div>

        {/* Add User Form */}
        <div className="add-user-form">
          <AddUser onUserAdded={handleUserAdded} />
        </div>
      </div>
      
      {/* Search for a user: */}
      <SearchBar  />
      
    </div>
  </div>
);
};

export default App;
