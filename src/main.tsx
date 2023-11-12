import React from 'react';
import { Global } from '@emotion/react';
import GlobalStyle from './theme/global.ts';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main, Post } from './routes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: 'post',
        element: <Post />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <Global styles={GlobalStyle} />
    </React.StrictMode>,
);
