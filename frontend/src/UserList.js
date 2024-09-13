// src/components/UserList.js

import React from 'react';
import axios from 'axios';
import { URL } from './config';

const UserList = ({ users, onUserDeleted }) => {
  const deleteUser = async (users, userId) => {
      console.log(userId);
      const response = await axios.delete(URL, { data: {id: userId} });
      console.log("Deleted" + JSON.stringify(response));
      onUserDeleted(userId);
  }
  
  console.log(users);
  return (
    <div className='userList'>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} ({user.age}) - {Array.isArray(user.address) ? user.address.join(', ') : user.address} /  
            <button onClick={async () => deleteUser(users, user._id)}>
              🗑️ 
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default UserList;
