export enum AppRoute {
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Root = '/',
  NotFound = 'not-found'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

export enum NameSpace {
  User = 'USER',
  Data = 'DATA',
  Offer = 'OFFER',
  Reviews = 'REVIEWS',
}
