import axios from "axios";

const authApiInstance = axios.create({
 baseURL: "/api/auth",
 withCredentials: true,
})


export async function register({ email, contact, password, fullname, isSeller }) {

 const response = await authApiInstance.post("/register", {
  email,
  contact,
  password,
  fullname,
  isSeller
 })
 return response.data
}

export async function login({ email, password }) {
 const response = await authApiInstance.post("/login", {
  email, password
 })

 return response.data
}

export async function getMe() {
 const response = await authApiInstance.get("/me")

 return response.data
}



// import axios from 'axios';

// const authApiInstance = axios.create({
//  baseURL: "http://localhost:3000/api/auth",
//  withCredentials: true,
// })

// export async function register({ email, contact, password, fullname, isSeller }) {
//  // sanitize contact: strip non-digit characters (users may enter + or spaces)
//  const sanitizedContact = (contact || '').toString().replace(/\D/g, '');

//  const payload = {
//   email,
//   contact: sanitizedContact,
//   password,
//   fullname,
//   isSeller,
//  };

//  try {
//   console.debug('auth.register payload:', payload);
//   const response = await authApiInstance.post('/register', payload);
//   return response.data;
//  } catch (err) {
//   console.error('auth.register error:', err?.response?.status, err?.response?.data || err.message);
//   throw err;
//  }
// }
