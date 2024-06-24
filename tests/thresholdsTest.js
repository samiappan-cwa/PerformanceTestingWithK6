import { check } from 'k6';
import http from 'k6/http';
export const options = {
    vus: 1,
    iterations: 40,
    thresholds: {
    http_req_failed: ['rate<0.01'], //Request failures should be less than 1%
  },
}
export default function () {
    const getUrl = 'https://reqres.in/api/users?page=2'
    const response = http.get(getUrl);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  }