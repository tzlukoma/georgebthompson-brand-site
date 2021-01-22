import { ApolloProvider } from '@apollo/client'
import client from '../src/apollo/client'
import Layout from '../src/components/Layout'
import '../src/styles/tailwind.css'

function MyApp ({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
