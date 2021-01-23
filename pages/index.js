import client from '../src/apollo/client'
import Layout from '../src/components/Layout'
import { GET_MENUS } from '../src/queries/get-menus'

export default function Index ({ data }) {
  return (
    <Layout data={data}>
      <div className='bg-hero-image h-almost-screen bg-center bg-cover '>
        <div className='md:grid grid-cols-2'>
          <div></div>
          <div className='p-52'>
            <div className='sm:text-5xl md:text-4xl xl:text-6xl'>
              Live Life by Design.
            </div>
            <div className='sm:text-4xl md:text-2xl xl:text-4xl right-align'>
              Not by Default.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
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
