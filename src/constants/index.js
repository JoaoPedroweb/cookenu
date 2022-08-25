import axios from 'axios';

export const BASE_URL = 'https://cookenu-api.herokuapp.com';

export const Login = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/user/login`, body);
    return data;
}

export const Signup = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/user/signup`, body);
    return data;
}

export const ListRecipes = async () => {
    const { data } = await axios.get(
        `${BASE_URL}/recipe/feed`,
        {
            headers: {
                Authorization: localStorage.getItem("cookenu.token")
            }
        }
    );
    return data;
}

export const AddRecipe = async (body) => {
    axios.post()
    const { data } = await axios.post(
        `${BASE_URL}/recipe`,
        body,
        {
            headers: {
                Authorization: localStorage.getItem("cookenu.token")
            }
        }
    );
    return data;
}


export const validateEmail = email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email);
export const validatePassword = password => /.{6,}/.test(password);
export const validateName = (name, length = 2) => new RegExp(`.{${length},}`).test(name);