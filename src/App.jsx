import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
function App() {


  return (
    <>
     <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
    <RouterProvider router={router}/>
    </>
  )
}

export default App
