import React from 'react';
import { storeCities } from "./store/store";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/routes/root";
import { ErrorPage } from "./components/routes/error-page";
import { Help } from "./components/help/help";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
          path: "weather",
          element: <App/>,
      },
      {
        path: "help",
        element: <Help />
      }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={storeCities}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
