import React from 'react'
import { ME  } from '../../apollo/queries'
import { withApollo }from '../Apollo'
import AuthUserContext from './'

const withAuthUserProvider = Component => {
    class withAuthUserProvider extends React.Component{

        state = {
            authUser: JSON.parse(localStorage.getItem('authUser')),
        }

        refreshAuthUser = () => {
            this.setState(() => ({
                authUser: JSON.parse(localStorage.getItem('authUser'))
            }))
        }

        async componentWillMount() {
            const { data } = await this.props.client.query({
                query: ME,
            })
            localStorage.setItem("authUser", JSON.stringify(data.me))
            this.setState(() => ({
                authUser: data.me,
            }))
        }
        

        render(){
            const { refreshAuthUser } = this
            const { authUser } = this.state
            return  <AuthUserContext.Provider value={{ authUser, refreshAuthUser,}}>
                        <Component {...this.props} />
                    </AuthUserContext.Provider>
        }
    }

    return withApollo(withAuthUserProvider)
}

export default withAuthUserProvider