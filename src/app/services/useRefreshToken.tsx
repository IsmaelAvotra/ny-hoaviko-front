import axios, { AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'

interface User {
  refreshToken: string
  accessToken?: string
}

const useRefreshToken = (currentUser: User | null) => {
  const baseURL = process.env.VITE_REACT_APP_API_URL

  const navigate = useNavigate()
  const refreshAccessToken = async (): Promise<any> => {
    try {
      if (!currentUser) {
        throw new Error('Utilisateur non défini.')
      }

      const response: AxiosResponse = await axios.post(
        `${baseURL}user/accessToken`,
        {
          refreshToken: currentUser.refreshToken,
        }
      )
      currentUser.accessToken = response.data.accessToken
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
      return response.data
    } catch (error) {
      navigate('/login', { replace: true })
    }
  }

  return refreshAccessToken
}

export default useRefreshToken
