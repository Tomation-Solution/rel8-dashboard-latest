import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {lazy,Suspense} from 'react'
import Loader from './components/Loader';
import ErrorPage from './pages/ErrorPage';
import DashboardLayout from './layouts/DashboardLayout';



function App() {
  

const DashboardPage = lazy(() => import("./pages/dashboard/DashboardPage"));
const OrganizationPage = lazy(() => import("./pages/dashboard/OrganizationPage"));
const MembersPage = lazy(() => import("./pages/dashboard/MembersPage"));
const NotificationsPage = lazy(() => import("./pages/dashboard/NotificationsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />} >
        <DashboardLayout >
          <DashboardPage />
        </DashboardLayout>
      </Suspense>
    ),
  },
  {
    path: "/organization",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout>
          <OrganizationPage />
        </DashboardLayout>
      </Suspense>
    ),
  },
  {
    path: "/members",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout>
          <MembersPage />
        </DashboardLayout>
      </Suspense>
    ),
  },
  {
    path: "/notifications",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout>
          <NotificationsPage />
        </DashboardLayout>
      </Suspense>
    ),
  },
]);

  return (
    <>
       <RouterProvider router={router} fallbackElement={<Loader />} />
    </>
  )
}

export default App
