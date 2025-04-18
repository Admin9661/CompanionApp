import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import { RouterProvider } from 'react-router-dom';
import Events from './pages/Events.tsx';
import TPOUpdates from './pages/TPOUpdates.tsx';
import Reminders from './pages/Reminders.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';

const router = createBrowserRouter([
  {
        path: "/",
        element: <Home />,
        children: [ { index:true, element: <Dashboard /> },
      { path: "/events", element: <Events /> },
      {path: "/tpoupdates", element: <TPOUpdates />},
          { path: "/reminders", element: <Reminders /> },
          { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> }]
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
