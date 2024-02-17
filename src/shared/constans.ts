export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unkhown = 'ANKHNOWN'
}

export enum AppRoutes {
  Main = '/',
  Offer = '/offer',
  Favorites = '/favorites',
  Login = '/login'
}

export enum FetchRoutes {
  Offers = 'offers',
  Nearby = 'nearby',
  Favorite = 'favorite',
  Comments = 'comments',
  Login = 'login',
  Logout = 'logout',
}

export enum FetchStatus {
  Idle = 'idle',
  Pending = 'loading',
  Fulfilled = 'succes',
  Rejected = 'error'
}
export const BACKEND_URL = 'https://15.design.htmlacademy.pro';
export const TIME_OUT = 3000;
