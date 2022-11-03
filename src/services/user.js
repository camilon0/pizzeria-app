import axios from "axios";

const URL_USERS = " http://localhost:3004/users";
const URL_PIZZAS = "http://localhost:3004";

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
    const url_pizzas = `${URL_PIZZAS}/pizzas`;

    const { data } = await axios.get(url_pizzas);

    return data;
  } catch (error) {
    return {
      error,
      data: null,
    };
  }
};

export const filterPizzas = async (word) => {
  try {
    const url_filter = `${URL_PIZZAS}/pizzas`;
    const { data } = await axios.get(url_filter);
    return data;
  } catch (error) {
    return {
      error,
      data: null,
    };
  }
};
export const getSinglePizza = async (id) => {
  const url = `${URL_PIZZAS}/pizzas?id=${id}`;
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
