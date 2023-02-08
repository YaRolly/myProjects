import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux/es/exports'
import App from './App'
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./error-page";
import { AboutFilm } from "./components/aboutFilm/aboutFilm";
import { Root } from "./components/root";
import {Search} from './components/search/search'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "detail",
        element: <AboutFilm />
      },
      {
        path: "search",
        element: <Search />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      
    </Provider>
  </React.StrictMode>,
)
