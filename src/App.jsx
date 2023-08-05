
import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import { Outlet, useRoutes } from "react-router-dom";
import Bot from "./components/Bot"

function App() { 
  let routes = useRoutes([
    { path: "/portfolio", element: <Home /> },
    { path: "/about", element: <About /> }
  ]);
  return (
    <>
      {routes}
      {/* <Bot /> */}
      <Outlet /> {/* Render nested routes */}
    </>
  );
}

export default App
