import axios, { AxiosResponse } from 'axios'
import { useEffect } from 'react'
import useRefreshToken from './useRefreshToken'

interface User {
  refreshToken: string
  accessToken?: string
}

const useAxios = () => {
  const baseURL = process.env.VITE_REACT_APP_API_URL

  const axiosInstance = axios.create({
    baseURL: baseURL,
  })

  const currentUser: User | any = JSON.parse(
    localStorage.getItem('currentUser') || 'null'
  )
  const refresh = useRefreshToken(currentUser)
  useEffect(() => {
    const requestInterceptor: number = axiosInstance.interceptors.request.use(
      (config) => {
        config.headers['Content-Type'] = 'application/json'
        if (currentUser?.accessToken) {
          config.headers['Authorization'] = `Bearer ${currentUser?.accessToken}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    ) as number

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      async (error) => {
        const prevReq = error?.config
        if (error?.response?.status === 401 && !prevReq?.sent) {
          prevReq.sent = true
          const data = await refresh()

          if (data.accessToken) {
            if (!error?.config?.url?.includes('logout')) {
              prevReq.headers['Authorization'] = `Bearer ${data.accessToken}`
            } else {
              prevReq.data = {
                refreshToken: `Bearer ${data.refreshToken}`,
              }
            }
            return axiosInstance(prevReq)
          }
          return Promise.reject(error)
        }

        return Promise.reject(error)
      }
    )

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor)
      axiosInstance.interceptors.response.eject(responseInterceptor)
    }
  }, [refresh])

  return axiosInstance
}

export default useAxios
