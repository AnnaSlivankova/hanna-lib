export const PATH = {
  MAIN: '/',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  RESTORE_PASSWORD: '/restore-password',
  CATALOG: '/catalog',
  // BOOK: '/catalog/:bookId?',
  CRM: '/customer-relationship-management',
  USER: '/user-page',
  CART: '/cart',
  CONTACTS: '/contacts',
  ABOUT_US: '/about-us',
  BOOK_CLUB: '/book-club-page',
  PODCAST: '/podcast',
  NOT_FOUND: '/not-found-page',
} as const

export const API_URL = {
  BASE_URL: 'http://0.0.0.0:8080',
  //auth
  ME: '',
  LOGIN: '',
  SIGN_UP: '/users/registration/user',
  //library
  FETCH_ALL_BOOKS: '/books/allBooks',
  FETCH_BOOK: '/books/',
  FETCH_ALL_AUTHORS: '/authors/allAuthors',
  FETCH_ALL_CATEGORIES: '/tags/allTags',
  //crm
  POST_NEW_BOOK: '/books',
  UPDATE_BOOK: '/books/',
  DELETE_BOOK: '/books/',
} as const
