import axios from "axios";

const URL_USERS = " http://localhost:3004/users";
const URL_PIZZAS = 'http://localhost:3004';

export const userFind = async (email, pass) => {
  const url = `${URL_USERS}?email=${email}&password=${pass}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return {
      error,
      data: null,
    };
  }
};
export const createUser = async (user) => {
  try {
    const { data } = await axios.post(`${URL_USERS}`, user);
    return data;
  } catch (error) {
    return {
      error,
      data: null,
    };
  }
};

export const getPizzas = async () => {
  try {
    const { data } = await axios.get(`${URL_PIZZAS}/pizzas`);
    return data;
  } catch (error) {
    return {
      error,
      data: null,
    };
  }
};
