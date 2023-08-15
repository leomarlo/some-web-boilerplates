let REVERSE_PROXY: boolean = true;
let NODE_MODE: string = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') {
  NODE_MODE = 'development';
  REVERSE_PROXY = false;
} else if (process.env.NODE_ENV === 'production') {
  NODE_MODE = 'production';
  REVERSE_PROXY = true;
}

const BACKEND_URL = REVERSE_PROXY ? '/api/' : 'http://localhost:5000/';

export { REVERSE_PROXY, NODE_MODE, BACKEND_URL };
