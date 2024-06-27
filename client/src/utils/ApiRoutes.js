export const SERVER_BASE_URL = "http://localhost:3010";

const AUTH_ROUTE = `${SERVER_BASE_URL}/api/auth`;
 
export const VERIFY_USER_ROUTE = `${AUTH_ROUTE}/verify-user`;
export const ONBOARD_USER_ROUTE = `${AUTH_ROUTE}/onboard-user`;
export const GET_ALL_CONTACTS =  `${AUTH_ROUTE}/get-contacts`;