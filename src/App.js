//import logo from './logo.png';
//import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Store from './components/Store';
import NotFound from './components/NotFound';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter(
  [
    {path: '/', element:<Home />},
    {path: '/acerca', element:<About />},
    {path: '/contacto', element:<Contact />},
    {path: '/tienda', element:<Store />},
    {path: '/*', element:<NotFound />},
  ]
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
