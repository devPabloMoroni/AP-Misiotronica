//import logo from './logo.png';
//import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Store from './components/pages/Store';
import NotFound from './components/pages/NotFound';

import Navbar from './components/layout/Navbar';
import Banner from './components/layout/Banner';
import Footer from './components/layout/Footer';


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
    <div className="container">
      <Navbar />
      <Banner />
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
