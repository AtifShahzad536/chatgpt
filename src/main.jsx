import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Home from './components/Home.jsx';

import Chat from './components/Chat.jsx';

import SummarizationPage from './components/Summary.jsx';
import CodeGenerationPage from './components/CodeGenerationPage.jsx';
import ImageGeneration from './components/ImageGeneration.jsx';
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/login", element: <Login/> },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path:"/",
        element:  <Home/> // Redirect to Home if logged in, otherwise to Login
      },
        {
        path:"/chat",
        element:  <Chat/> // Redirect to Home if logged in, otherwise to Login
      }
      ,
       {
        path:"/image-gen",
        element:  <ImageGeneration/> // Redirect to Home if logged in, otherwise to Login
      },
       {
        path:"/code-gen",
        element:  <CodeGenerationPage/> // Redirect to Home if logged in, otherwise to Login
      },
      {
        path:'/summarize',
        element:<SummarizationPage/>
      }

    ],
  },
]);


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  
  </StrictMode>,

)
