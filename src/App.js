import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./user/pages/home/Home";
import RootLayout from './user/pages/RootLayout';
import Directory from './pharmacy/pages/directory/Directory';
import ErrorPage from './user/pages/errorpage/ErrorPage';
import PharmacyDetails from './pharmacy/pages/pharmacydetails/PharmacyDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <Home />},
      {path: '/directory', element: <Directory />},
      {path: '/directory/details/id', element: <PharmacyDetails />}
    ]
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
