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

export function createcards (token, title, body, border, color, font, image) {
  return axios.post('https://clint-jameel-ecards.herokuapp.com/cards/', {
    title: title,
    body: body,
    border: border,
    font: font,
    color: color
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

export function getFollowed (token) {
  return axios.get('https://clint-jameel-ecards.herokuapp.com/friend_requests/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function getFollowers (token) {
  return axios.get('', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function getAllCards (token) {
  return axios.get('https://clint-jameel-ecards.herokuapp.com/cards/all_cards/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}
