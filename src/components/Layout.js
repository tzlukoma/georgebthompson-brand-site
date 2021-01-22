import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'

function Layout ({ children, data }) {
  console.warn('menus', data)
  return (
    <div>
      <Head>
        <link rel='shortcut icon' href={data?.header?.favicon} />
      </Head>
      <Header header={data?.header} headerMenus={data?.menus?.headerMenus} />
      {children}
      <Footer footer={data?.footer} footerMenus={data?.menus?.footerMenus} />
    </div>
  )
}

export default Layout
