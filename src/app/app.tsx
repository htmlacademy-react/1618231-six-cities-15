import { PageNotFound } from 'src/pages/page-not-found';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageMain } from 'src/pages/page-main';
import { Offer } from 'src/pages/offer';
import { Login } from 'src/pages/login';
import { Favorites } from 'src/pages/favorites';
import { PrivatRoute } from 'src/features/privat-route';
import { AppRoutes} from 'src/shared/constans';
import { Layout } from 'src/pages/layout';
import { useAppSelector } from 'src/shared/hooks';


const App = (): JSX.Element => {
  const authStatus = useAppSelector((state) => state.userState.status);
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
            <PrivatRoute authStatus={authStatus}>
              <Favorites />
            </PrivatRoute>
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
