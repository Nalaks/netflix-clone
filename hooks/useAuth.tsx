/* eslint-disable react-hooks/exhaustive-deps */
import {
  User,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import { useRouter } from 'next/router'
import {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
  FC
} from 'react'
import { auth } from '../lib/firebase'
import { AuthProviderProps, IAuthContext } from '../types/types'

const AuthContext = createContext<IAuthContext>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
  error: null,
  loading: false
})

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [initialLoading, setInitialLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        setLoading(false)
      } else {
        setUser(null)
        setLoading(true)
        router.push('/login')
      }
      setInitialLoading(false)
    })
  }, [auth])

  const signUp = async (email: string, password: string) => {
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      setUser(userCredential.user)
      router.push('/')
      setLoading(false)
    } catch (error) {
      console.log(error)
      // Todo: Add error handling
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      setUser(userCredential.user)
      router.push('/')
      setLoading(false)
    } catch (error) {
      console.log(error)
      // Todo: Add error handling
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      await signOut(auth)
      setUser(null)
      router.push('/login')
      setLoading(false)
    } catch (error) {
      console.log(error)
      // Todo: Add error handling
    } finally {
      setLoading(false)
    }
  }

  const memo = useMemo(
    () => ({
      user,
      signUp,
      signIn,
      logout,
      error,
      loading
    }),
    [user, loading, error]
  )

  return (
    <AuthContext.Provider value={memo}>
      {!initialLoading && children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth
