import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_URL } from '@/common/constants'

export const baseApi = createApi({
  // baseQuery: baseQueryWithReauth,
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL.BASE_URL,
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Me', 'Books', 'Book', 'Authors', 'Categories'],
})

//
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//
// export const baseApi = createApi({
//   reducerPath: 'baseApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://0.0.0.0:8080',
//     // credentials: 'include',
//     // prepareHeaders: headers => {
//     //   headers.append('x-auth-skip', 'true')
//     // },
//   }),
//   tagTypes: ['Authors'],
//   endpoints: builder => {
//     return {
//       getAllAuthors: builder.query<any[], void>({
//         query: () => `/authors/allAuthors`,
//         providesTags: ['Authors'],
//       }),
//       createAuthor: builder.mutation<any, any>({
//         query: author => {
//           return {
//             method: 'POST',
//             url: '/authors',
//             body: author,
//           }
//         },
//         invalidatesTags: ['Authors'],
//       }),
//     }
//   },
// })
//
// export const { useGetAllAuthorsQuery, useCreateAuthorMutation } = baseApi
