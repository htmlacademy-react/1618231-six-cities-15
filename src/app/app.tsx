import { PageNotFound } from 'src/pages/page-not-found';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageMain } from 'src/pages/page-main';
import { Offer } from 'src/pages/offer';
import { Login } from 'src/pages/login';
import { Favorites } from 'src/pages/favorites';
import { PrivatRoute } from 'src/features/privat-route';
import { AppRoutes, AutorizationStatus } from 'src/shared/constans';
import { Layout } from 'src/pages/layout';

const router = createBrowserRouter([
  {
    path: AppRoutes.Main,
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: AppRoutes.Main,
        element: <PageMain />
      },

      {
        path: `${AppRoutes.Offer}/:offerId`,
        element: <Offer />
      },

      {
        path: AppRoutes.Login,
        element: <Login />,
      },

      {
        path: AppRoutes.Favorites,
        element:
          <PrivatRoute authStatus={AutorizationStatus.Auth}>
            <Favorites />
          </PrivatRoute>
      }
    ]
  },
]);


const App = () => (
  <RouterProvider router={router} />
);

export default App;
