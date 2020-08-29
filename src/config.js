export default {
  API_ENDPOINT: process.env.API_ENPOINT || `http://localhost:8000`,
  API_TOKEN: process.env.REACT_APP_API_TOKEN,
  TOKEN_KEY: 'client-auth-token',
  JWT_TOKEN: 'jwt-token'
}