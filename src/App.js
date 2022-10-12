
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/error/Error';

import Main from './components/Main/Main';
import Start from './components/Start/Start';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
          path: '/',
          loader : ()=> fetch('https://openapi.programming-hero.com/api/quiz/'),
          element: <Topics></Topics>

        },
        {
          path: "/statistics",
          loader : ()=> fetch('https://openapi.programming-hero.com/api/quiz/'),
          element: <Statistics></Statistics>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/start/:startId",
          loader : async ({params})=> {
            return fetch (`https://openapi.programming-hero.com/api/quiz/${params.startId}`)

          },
          element: <Start></Start>
        },
        
      ]
    },
    {
      path: "*",
      element: <Error></Error>
    },
  ]);
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
