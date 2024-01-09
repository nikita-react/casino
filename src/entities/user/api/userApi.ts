import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../../app/config/network';
import { IUser } from '../models/User';


interface IResponseGetUser {
    id: number
}

type IRequestGetUser = Pick<IUser, 'name'>


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getUser: builder.query<IRequestGetUser, IResponseGetUser>({
            query: (id) => `/user/${id}`,
        })
    }),
})

export const { useGetUserQuery } = userApi;