import './App.css';

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Store from './components/pages/Store/Store';
import NotFound from './components/pages/NotFound/NotFound';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter(
  [
    {path: '/', element:<Home />},
    {path: '/acerca', element:<About />},
    {path: '/contacto', element:<Contact />},
    {path: '/tienda', element:<Store />},
    {path: '/busqueda', element:<Store />},
    {path: '/*', element:<NotFound />},
  ]
);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={routes} />
      <Footer />   
    </>
  );
}

export default App;
