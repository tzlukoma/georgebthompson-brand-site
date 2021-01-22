import { isArray, isEmpty } from 'lodash'
import Link from 'next/link'
import { sanitize } from '../utils/functions'

function Footer ({ footer, footerMenus }) {
  return (
    <footer className='bg-primary p-6'>
      <div className='flex flex-wrap overflow-hidden xl:-mx-2'>
        {/* Sidebar One */}
        <div className='w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/3'>
          <div
            dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarOne) }}
          />
        </div>
        {/* Sidebar Two */}
        <div className='w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/3'>
          {footer?.sidebarTwo && (
            <div
              dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarTwo) }}
            />
          )}
        </div>
        {/* Footer Menu */}
        <div className='w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/3'>
          {!isEmpty(footerMenus) && isArray(footerMenus) ? (
            <ul>
              {footerMenus.map(menuItem => (
                <li key={menuItem?.node?.id}>
                  <Link href={menuItem?.node?.path}>
                    <a className='block mt-4 lg:inline-block lg:mt-0 text-ssanyuwork-800 hover:text-ssanyuwork-400 mr-4 text-base'>
                      {menuItem?.node?.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div class='flex flex-wrap overflow-hidden xl:-mx-2 mt-5'>
        <div class='w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/2'>
          {/* Copyright */}
          {footer?.copyrightText}
        </div>

        <div class='w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/2'>
          Social icons
        </div>
      </div>
    </footer>
  )
}

export default Footer
