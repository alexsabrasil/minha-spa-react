import axios from 'axios';

const getUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('Usuários:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter usuários:', error);
    throw error;
  }
};

export { getUsers };
