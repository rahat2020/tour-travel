import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://tour-travel-server-inky.vercel.app/' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Post'],

    endpoints: (builder) => ({

        ////////// LOGIN, REGISTER & USER API //////////
        login: builder.mutation({
            query: (data) => ({
                url: '/auth/v1/login',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Post']
        }),
        register: builder.mutation({
            query: (data) => ({
                url: '/auth/v1/register',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Post']
        }),
        updateUser: builder.mutation({
            query: (data) => {
                const { id, ...body } = data
                console.log('apiSlice-Update-data', body)
                console.log('apiSlice-Update-ID', id)
                return {
                    url: `/auth/v1/update-user/${id}`,
                    method: 'PUT',
                    body,
                }
            },
            invalidatesTags: ['Post']
        }),
        getAllUsers: builder.query({
            query: () => '/auth/v1/allUsers',
            providesTags: ['Post']
        }),
        getSingleUser: builder.query({
            query: (id) => `/auth/v1/user/${id}`,
            providesTags: ['Post']
        }),
        userDataByEmail: builder.query({
            query: (email) => `/auth/v1/user-data?email=${email}`,
            providesTags: ['Post']
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/auth/v1/deleteuser/${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: ['Post']
        }),


        ////////// EVENTS API ///////////
       getAllPost: builder.query({
            query: () => '/product/get',
            providesTags: ['Post']
        }),
        addPost: builder.mutation({
            query: (data) => ({
                url: '/product/add',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Post']
        }),
        getSinglePost: builder.query({
            query: (id) => `/product/get/${id}`,
            providesTags: ['Post']
        }),
        deletePosts: builder.mutation({
            query: (id) => ({
                url: `/product/delete/${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: ['Post']
        }),
      
      


    }),


})


export const {

    // LOGIN, REGISTER AND USERS
    useLoginMutation,
    useRegisterMutation,
    useGetAllUsersQuery,
    useGetSingleUserQuery,
    useUserDataByEmailQuery,
    useUpdateUserMutation,
    useDeleteUserMutation,
    // EVENT
    useAddPostMutation,
    useGetAllPostQuery,
    useGetSinglePostQuery,
    useDeletePostsMutation,



} = api