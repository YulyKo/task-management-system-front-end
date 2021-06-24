import { AUTH, BASE_URL } from '../utils/api_urls';
import { COMMON_HEADERS } from '../utils/common_headers';

export function registration(user) {
  return fetch(`${AUTH}/registration`, {
    method: 'POST',
    headers: COMMON_HEADERS,
    body: JSON.stringify(user),
  })
    .then((res) => res.json());
}

export function login(user) {
  return fetch(`${AUTH}/login`, {
    method: 'POST',
    headers: COMMON_HEADERS,
    body: JSON.stringify(user),
  })
    .then((res) => res.json());
}

export function confirmUser(code) {
  console.log(code);
  return fetch(`${BASE_URL}auth/confirm/${code}`, {
    method: 'PUT',
  })
    .then((res) => res.json());
}
