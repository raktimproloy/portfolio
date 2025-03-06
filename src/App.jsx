
import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import { Outlet, useRoutes } from "react-router-dom";

function App() { 
  let routes = useRoutes([
    { path: "/portfolio", element: <Home /> },
    { path: "/about", element: <About /> }
  ]);
  return (
    <>
      {routes}
      <Outlet /> {/* Render nested routes */}
    </>
  );
}

export default App
