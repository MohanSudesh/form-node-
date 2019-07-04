import React from 'react'
import { ApolloConsumer } from 'react-apollo';

const withApollo = Component => props => (
    <ApolloConsumer>
        { client => (
            <Component {...props} client={client} />
        )}
    </ApolloConsumer>
)

export default withApollo