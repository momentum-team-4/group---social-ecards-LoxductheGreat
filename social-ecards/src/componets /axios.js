import axios from 'axios'

export function login (username, password) {
  return axios.post('https://clint-jameel-ecards.herokuapp.com/auth/token/login/', {
    username: username,
    password: password
  })
    .then(res => res.data.auth_token)
}

export function register (username, password, email) {
  return axios.post('https://clint-jameel-ecards.herokuapp.com/auth/users/', {
    username: username,
    password: password,
    email: email
  })
    .then(res => res.auth_token)
}

export function userData (token) {
  return axios.get('https://clint-jameel-ecards.herokuapp.com/auth/users/me/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function createcards (token, title, body) {
  return axios.post('https://clint-jameel-ecards.herokuapp.com/cards/', {
    title: title,
    body: body
  }, {
    headers: {
      Authorization: 'Token ' + token
    }
  }).then(res => res.data)
}

export function getcards (token) {
  return axios.get('https://clint-jameel-ecards.herokuapp.com/cards', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}
