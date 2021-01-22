import Nav from './Nav'
import { isEmpty } from 'lodash'

function Header ({ header, headerMenus }) {
  if (isEmpty(headerMenus)) {
    return null
  }

  return (
    <header>
      <Nav header={header} headerMenus={headerMenus} />
    </header>
  )
}

export default Header
