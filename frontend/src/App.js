// src/App.js

import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import AddUser from './AddUser';
import axios from 'axios';
import SearchBar from './SearchBar';
import { URL } from './config';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(URL);
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

  const handleUserDeleted = (deletedUserId) => {
    const newUsers =  users.filter(x => {
    return x._id !== "" + deletedUserId;
  })
  console.log(newUsers);
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
