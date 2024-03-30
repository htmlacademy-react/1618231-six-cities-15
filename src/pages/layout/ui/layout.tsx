import { Link, Outlet, useLocation } from 'react-router-dom';
import { AppRoutes, AutorizationStatus } from 'src/shared/constans';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import cn from 'classnames';
import { fetchAuthStatus, fetchUserLogout } from 'src/app/api-actions';
import { useEffect } from 'react';

const Layout = (): JSX.Element => {
  const { pathname } = useLocation();
  const statusAuth = useAppSelector((state) => state.userState.status);
  const { email } = useAppSelector((state) => state.userState.user);
  const dispatch = useAppDispatch();
  const onLogoutBtnClick = () => {
    dispatch(fetchUserLogout());
  };

  useEffect(() => {
    dispatch(fetchAuthStatus());
  }, [dispatch]);
  return (
    <div className={cn('page', { 'page--gray page--main': pathname === AppRoutes.Main as string }, { 'page--gray page--login': pathname === AppRoutes.Login as string })}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {statusAuth !== AutorizationStatus.Auth &&
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoutes.Login}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>}

                {statusAuth === AutorizationStatus.Auth &&
                  <>
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{email}</span>
                        <span className="header__favorite-count">3</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        onClick={() => onLogoutBtnClick()}
                        className="header__nav-link"
                        to={AppRoutes.Main}
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
