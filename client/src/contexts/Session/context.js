import { createContext } from 'react'

const AuthUserContext = createContext({
    authUser: null,
    refreshAuthUser: () => {},
})

export default AuthUserContext