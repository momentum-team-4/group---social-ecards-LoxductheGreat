import axios from 'axios'

export function login (username, password) {
  return axios.post('', {
    username: username,
    password: password
  })
    .then(res => res.data.auth_token)
}
