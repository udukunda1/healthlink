import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Home from "./user/pages/home/Home";
import RootLayout from './user/pages/RootLayout';
import Directory from './pharmacy/pages/directory/Directory';
import ErrorPage from './user/pages/errorpage/ErrorPage';
import PharmacyDetails from './pharmacy/pages/pharmacydetails/PharmacyDetails';
import AvailabilitySearch from './pharmacy/pages/availabilitysearch/AvailabilitySearch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <Home />},
      {path: '/directory', element: <Directory />},
      {path: '/directory/details/:pharmacyId', element: <PharmacyDetails />},
      {path: '/search', element: <AvailabilitySearch />}
    ]
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
