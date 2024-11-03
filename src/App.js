import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./user/pages/home/Home";
import RootLayout from './user/pages/RootLayout';
import Directory from './pharmacy/pages/directory/Directory';
import ErrorPage from './user/pages/errorpage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <Home />},
      {path: '/directory', element: <Directory />}
    ]
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
