import axios from "axios";

const API_KEY = "AIzaSyB8DPkWwO6tvViJl2gBMoLnHPrKbjdw5JE";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  try {
    const response = await axios.post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error during authentication:", error.response.data);
    throw error;
  }
  
}

export async function createUser(email, password) {
  try {
    return await authenticate('signUp', email, password);
  } catch (error) {
    console.error("Error creating user:", error.response.data);
    throw error;
  }
}

export async function login(email, password) {
  return await authenticate('signInWithPassword', email, password);
}
