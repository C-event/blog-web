import http from "./request";

const user = {
  login: (body: Object) => http.post('/user/login', body),
  register: (body: Object) => http.post('/user/registry', body),
  getUserInfo : () => http.get('/user/getCurrentUserInfo')
}

export { user }