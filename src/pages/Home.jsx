// Home.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../utils/api';
import './Home.css';

function Home() {
  const [users, setUsers] = useState([]);
  
  const [showUserList, setShowUserList] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userList = await getUsers();
      setUsers(userList);
    };

    fetchData();
  }, []);

  const toggleUserList = () => {
    setShowUserList(!showUserList);
  };

  return (
    <div>
      <h2>Home</h2>
      <Link to="/sobre" className="nav-link">Sobre</Link>
      <Link to="/tarefas" className="nav-link">Tarefas</Link>

      <div>
        <button onClick={toggleUserList} className="user-button">Usuários</button>
        {showUserList && (
          <div>
            <h3>Lista de Usuários</h3>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td className="user-name">{user.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}


export default Home;

