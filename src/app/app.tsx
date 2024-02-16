import { PageNotFound } from 'src/pages/page-not-found';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageMain } from 'src/pages/page-main';
import { AppRoutes, AutorizationStatus } from 'src/shared/constats';
import { Offer } from 'src/pages/offer';
import { Login } from 'src/pages/login';
import { Favorites } from 'src/pages/favorites';
import { PrivatRoute } from 'src/widgest/privat-route';


const router = createBrowserRouter([
  {
    path: AppRoutes.Main,
    element: <PageMain />,
    errorElement: <PageNotFound />
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

]);


const App = () => (
  <RouterProvider router={router} />
);

export default App;
