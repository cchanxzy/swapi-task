import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import { ErrorPage, HomePage, PersonPage } from './pages';
import reportWebVitals from './reportWebVitals';
import { Header, Footer, Main } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  { path: '/person/:id', element: <PersonPage /> },
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />
      <Main>
        <RouterProvider router={router} />
      </Main>
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
