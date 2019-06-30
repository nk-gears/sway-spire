import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import config from '../config'

export interface ApolloClientProps {
    apollo: ApolloClient<{}>
}

// receives { headers } when SSR
export default withApollo(() => (
    new ApolloClient({ uri: config.graphqlUrl })
))