import { useState, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { fetchUserLogin } from 'src/app/api-actions';
import { AuthData } from 'src/shared/app-types';
import { AppRoutes, AutorizationStatus } from 'src/shared/constans';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';

const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const regPass = /^[a-zA-z]+[0-9]/i;

const Login = (): JSX.Element => {

  const [authData, setAuthData] = useState<AuthData>({ email: '', password: '' });
  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchUserLogin(authData));
  };

  const authStatus = useAppSelector((state) => state.userState.status);

  return (
    <main className="page__main page__main--login">
      {authStatus === AutorizationStatus.Auth && <Navigate to={AppRoutes.Main}/>}
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form onSubmit={(evt) => handleFormSubmit(evt)} className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                value={authData.email}
                onChange={(evt) => setAuthData({ ...authData, email: evt.target.value })}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                value={authData.password}
                onChange={(evt) => setAuthData({ ...authData, password: evt.target.value })}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
            >Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
};


export default Login;
