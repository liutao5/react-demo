import { get, post } from 'axios';

const request = () => {
  get('http://localhost:3000').then((res) => console.log(res)).catch((err) => console.log('err:', err));
};

export default request;
