
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Router from './router/Router'
import './App.css';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_BASE_URL;
console.log(import.meta.env.VITE_SERVER_BASE_URL);
console.log(axios.defaults.baseURL);
function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App
