import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Header from "./components/Header";
import Details from './components/Details';
import NewArrival from './components/NewArrival';

const AppLayout = () =>{
  return (
      <div className='app'>
        <Header />
        <Outlet />
        <Footer />
      </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element: <App />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/descriptions',
        element: <Details />
      },
      {
        path:'/newArrival',
        element: <NewArrival />
      }
    ]
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
