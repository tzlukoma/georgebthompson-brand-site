import client from '../src/apollo/client'
import Layout from '../src/components/Layout'
import { GET_MENUS } from '../src/queries/get-menus'

export default function Index ({ data }) {
  return <Layout data={data}></Layout>
}

export async function getStaticProps (context) {
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS
  })

  console.warn(data)

  return {
    props: {
      data: {
        header: data?.header || [],
        menus: {
          headerMenus: data?.headerMenus?.edges,
          footerMenus: data?.footerMenus?.edges
        },
        footer: data?.footer || []
      }
    }, // will be passed to the page component as props
    revalidate: 1
  }
}
