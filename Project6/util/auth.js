import axios from "axios";

const API_KEY = "AIzaSyB8DPkWwO6tvViJl2gBMoLnHPrKbjdw5JE";

async function authinticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response.data);
}

async function createUser(email, password) {
  try {
    return await authinticate('signUp',email,password);
  } catch (error) {
    console.error("Error creating user:", error.response.data);
    throw error;
  }
}

export async function login(email,password){
   return await authinticate('signInWithPassword',email,password)
}
export default createUser;
