
import './App.css'
import Home from './pages/Home'
import { Outlet, useRoutes } from "react-router-dom";

function App() { 
  let routes = useRoutes([
    { path: "/portfolio", element: <Home /> }
  ]);
  return (
    <>
    {/* sadad */}
      {routes}
      <Outlet /> {/* Render nested routes */}
    </>
  );
}

export default App
