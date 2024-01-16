import { toast } from 'react-toastify'

import { API_URL } from '@/common/constants'
import { baseApi } from '@/services/base-api'

export const libraryService = baseApi.injectEndpoints({
  endpoints: builder => ({
    fetchAllBooks: builder.query<Books[], void>({
      providesTags: ['Books'],
      query: () => API_URL.FETCH_ALL_BOOKS,
    }),
    fetchBook: builder.query<Books, string>({
      providesTags: ['Book'],
      query: id => `${API_URL.FETCH_BOOK}${id}`,
      transformErrorResponse: error => {
        // @ts-ignore
        toast.error(error.data?.error ?? 'some error occurred')
      },
    }),
    fetchAllAuthors: builder.query<any, void>({
      providesTags: ['Authors'],
      query: () => API_URL.FETCH_ALL_AUTHORS,
    }),
    fetchAllCategories: builder.query<any, void>({
      providesTags: ['Categories'],
      query: () => API_URL.FETCH_ALL_CATEGORIES,
    }),
  }),
})

export const {
  useFetchAllAuthorsQuery,
  useFetchAllBooksQuery,
  useFetchAllCategoriesQuery,
  useFetchBookQuery,
} = libraryService

//on fetch all books response type
export type Books = {
  author: Author
  createdAt: string
  id: string
  imageUrl: string
  price: number
  tags: Tags[]
  title: string
  updatedAt: string
}
export type Author = {
  firstName: string
  id: string
  lastName: string
}
export type Tags = {
  id: string
  name: string
}
