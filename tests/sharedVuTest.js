import { check } from 'k6';
import http from 'k6/http';
export const options = {
  executor: 'shared-iteration',
  vus: 10,
  iterations: 200,
  maxDurations: '30s',
}
export default function () {
    const getUrl = 'https://reqres.in/api/users?page=2'
    const response = http.get(getUrl);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  }