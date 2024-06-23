import { check } from 'k6';
import http from 'k6/http';

export default function () {
    const postUrl = 'https://reqres.in/api/users';
    const payload = {
        "name": "morpheus",
        "job": "leader"
    };
    const response = http.post(postUrl,payload);
    console.log(response);

    check(response, {
        'is 201 success': (r) => r.status===201,
    });
  }