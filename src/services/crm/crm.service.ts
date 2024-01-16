import { API_URL } from '@/common/constants'
import { baseApi } from '@/services/base-api'

export const crmService = baseApi.injectEndpoints({
  endpoints: builder => ({
    createNewBook: builder.mutation<void, Book>({
      invalidatesTags: ['Books'],
      query: body => ({
        body,
        method: 'POST',
        url: API_URL.POST_NEW_BOOK,
      }),
    }),
    deleteBook: builder.mutation<void, { id: string }>({
      invalidatesTags: ['Books'],
      query: ({ id }) => ({
        method: 'DELETE',
        url: `${API_URL.DELETE_BOOK}${id}`,
      }),
    }),
    updateBook: builder.mutation<void, { id: string; data: Book }>({
      invalidatesTags: ['Books'],
      query: ({ id, ...patch }) => ({
        body: { ...patch.data },
        method: 'PUT',
        url: `${API_URL.UPDATE_BOOK}${id}`,
      }),
    }),
  }),
})

export const { useCreateNewBookMutation, useDeleteBookMutation, useUpdateBookMutation } = crmService

//on create book body type
export type Book = {
  author: {
    firstName: string
    lastName: string
  }
  imageUrl: string
  price: number
  tags: Category[]
  title: string
}
export type Category = {
  name: string
}
