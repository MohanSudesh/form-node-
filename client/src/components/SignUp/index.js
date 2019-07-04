import React from 'react'
import { Mutation } from 'react-apollo'
import { CREATE_USER } from '../../apollo/mutations'
import SignUp from './SignUp'

export default props => (
    <Mutation mutation={CREATE_USER}>
      {(createUser, { data, loading, error }) => {
        if (loading) {
          return <SignUp loading={true} createUser={createUser} />
        }

        if (error) {
          return <SignUp error={error} createUser={createUser} />
        }

        if (data) {
          localStorage.setItem("authToken", data.createUser.token)
          localStorage.setItem("userId", data.createUser.user._id)
          // return <Redirect to="/" />
        }

        return <SignUp createUser={createUser} data={data} />
      }}
    </Mutation>
)