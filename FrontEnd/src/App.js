import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Home from "./user/pages/home/Home";
import RootLayout from './user/pages/RootLayout';
import Directory from './pharmacy/pages/directory/Directory';
import ErrorPage from './user/pages/errorpage/ErrorPage';
import PharmacyDetails from './pharmacy/pages/pharmacydetails/PharmacyDetails';
import AvailabilitySearch from './pharmacy/pages/availabilitysearch/AvailabilitySearch';
import PharmaDashBoard from './pharmacy/pages/dashboard/PharmaDashBoard';
import StudentLayout from './authentication/user/StudentLayout';
import AuthenticateLayout from './authentication/AuthenticateLayout';
import StudentLogin from './authentication/user/pages/StudentLogin';
import StudentSignUp from './authentication/user/pages/StudentSignUp';
import PharmacyLayout from './authentication/pharmacy/PharmacyLayout';
import PharmacyLogin from './authentication/pharmacy/pages/PharmacyLogin';
import PharmacySignUp from './authentication/pharmacy/pages/PharmacySignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '', element: <Home />},
      {path: 'directory', element: <Directory />},
      {path: 'directory/details/:pharmacyId', element: <PharmacyDetails />},
      {path: 'search', element: <AvailabilitySearch />},
      {
        path: 'authenticate',
        element: <AuthenticateLayout />,
        children: [
          {
            path: 'student',
            element: <StudentLayout />,
            children: [
              {path: '', element: <StudentLogin />},
              {path: 'signup', element: <StudentSignUp />}
            ]
          },
          {
            path: 'pharmacy',
            element: <PharmacyLayout />,
            children: [
              {path: '', element: <PharmacyLogin />},
              {path: 'signup', element: <PharmacySignUp />}
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'pharmadashboard',
    element: <PharmaDashBoard />
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
