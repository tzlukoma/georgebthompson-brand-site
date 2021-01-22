import { isEmpty } from 'lodash'
import Link from 'next/link'
import { useState } from 'react'

const NavItem = ({ label, path }) => {
  return (
    <Link href={path}>
      <a className='block mt-4 lg:inline-block lg:mt-0 text-ssanyuwork-800 hover:text-ssanyuwork-400 mr-4 text-base'>
        {label}
      </a>
    </Link>
  )
}

function Nav ({ header, headerMenus }) {
  if (isEmpty(headerMenus)) {
    return null
  }

  const [isMenuVisible, setMenuVisibility] = useState(false)

  return (
    <nav className='flex items-center justify-between flex-wrap bg-white border-b-2 border-ssanyugray-100 p-4'>
      <div className='flex items-center flex-no-shrink  text-ssanyuskin-500 text-2xl mr-6'>
        <img
          src={header?.siteLogoUrl}
          alt='ssanyu logo'
          className='h-12 w-12 mr-2'
        />
        <div className='flex flex-col items-start'>
          <span className='font-semiboldtext-xl font-sans font-semibold tracking-tight antialiased'>
            {header?.siteTitle}
          </span>
          <span className='text-sm'>{header?.siteTagLine}</span>
        </div>
      </div>
      <div className='block lg:hidden'>
        <button
          onClick={() => setMenuVisibility(!isMenuVisible)}
          className='flex items-center px-3 py-2 border rounded text-primary-lighter border-primary-light hover:text-white hover:border-white'
        >
          <svg
            className='h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuVisible ? 'max-h-full flex-grow' : 'h-0'
        } overflow-hidden lg:h-auto w-full block  lg:flex lg:items-center lg:w-auto`}
      >
        {headerMenus.length ? (
          <div className='text-sm lg:flex-grow'>
            {headerMenus.map(menuItem => {
              return (
                <NavItem
                  key={menuItem?.node?.id}
                  label={menuItem?.node?.label}
                  path={menuItem?.node?.path}
                />
              )
            })}
          </div>
        ) : null}
      </div>
      <div>
        <a
          href='#'
          className='inline-block text-sm px-4 py-2 leading-none border rounded text-ssanyuskin-500 border-ssanyuskin-500 hover:border-transparent hover:text-ssanyulove-500 hover:bg-ssanyuwork-100 mt-4 lg:mt-0'
        >
          Contact Me
        </a>
      </div>
    </nav>
  )
}

export default Nav
