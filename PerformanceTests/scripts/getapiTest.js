import { check } from 'k6';
import http from 'k6/http';
export const options = {
  vus: 10,
  duration: '30s',
}
export default function () {
    const getUrl = 'https://reqres.in/api/users?page=2'
    const response = http.get(getUrl);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  }