import axios from "axios";

const URL_USERS = "https://pizzeria-app-back-production.up.railway.app/users";
const URL_PIZZAS = "https://pizzeria-app-back-production.up.railway.app";

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

export const createBuy = async (buy) => {
  try {
    const { data } = await axios.post(`${URL_PIZZAS}/compra`, buy);
    return data;
  } catch (error) {
    return {
      error,
      data: null,
    };
  }
};

export const redirectUser = (navigate) => {
  const userSession = sessionStorage.getItem("user");
  if (userSession) {
    navigate("/home");
  }
};

export const protectedRoute = (navigate) => {
  const userSession = sessionStorage.getItem("user");
  if (!userSession) {
    navigate("/");
  }
};
