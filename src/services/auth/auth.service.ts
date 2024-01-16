import { API_URL } from '@/common/constants'
import { UserDataFetch } from '@/services/auth/auth.types'
import { baseApi } from '@/services/base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    signup: builder.mutation<any, UserDataFetch>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: API_URL.SIGN_UP,
      }),
    }),
    login: builder.mutation<any, any>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: API_URL.ME,
      }),
    }),
    me: builder.query<any, any>({
      providesTags: ['Me'],
      query: () => API_URL.LOGIN,
    }),
  }),
})

export const { useSignupMutation } = authService
