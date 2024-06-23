import { check } from 'k6';
import http from 'k6/http';
export const options = {
  vus: 1,
  duration: '5s',
}
export default function() {
    const getUrl = 'https://reqres.in/api/users?page=2'
    const responseGet = http.get(getUrl);
    check(responseGet, {
      'Get response is status 200': (r) => r.status === 200,
    });
    
    let postPlayload = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }
    const postUrl = 'https://reqres.in/api/register';
    const responsePost = http.post(postUrl, postPlayload);
    check(responsePost, {
        'Post response is status 200': (r) => r.status === 200,
      });
    
    let putPayload = {
        "name": "morpheus",
        "job": "zion resident"
    }
    const putUrl = 'https://reqres.in/api/users/2';
    const responsePut = http.put(putUrl, putPayload);

    check(responsePut, {
        'Put response is status 200': (r) => r.status === 200,
    });

    let patchPayload = {
        "name": "morpheus",
        "job": "zion resident"
    }
    const patchUrl = 'https://reqres.in/api/users/2';
    const responsePatch = http.patch(patchUrl, patchPayload);

    check(responsePatch, {
        'Patch response is status 200': (r) => r.status === 200,
    });

    const deleteUrl = 'https://reqres.in/api/users/2';
    const responseDelete = http.del(deleteUrl);
    check(responseDelete, {
        'Delete response is status 204': (r) => r.status === 204,
    });
  }