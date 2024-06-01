import { NavLink, Outlet} from "react-router-dom";
import {Nav, Li, Ul} from './Layout.styled'

export const Layout = () => {
    return (
        <>
        
        <Nav>
        <Ul>
          <Li>
            <NavLink to='/Home'>Home page</NavLink>
          </Li>
          <Li>
            <NavLink to='/Cats'>Cats page</NavLink>
          </Li>
          <Li>
            <NavLink to='/Gym'>Gym page</NavLink>
          </Li>
          <Li>
            <NavLink to='/Clock'>Clock page</NavLink>
          </Li>
          <Li>
            <NavLink to='/ColorPicker'>ColorPicker page</NavLink>
          </Li>
          <Li>
            <NavLink to='/Form'>Form page</NavLink>
          </Li>
          <Li>
            <NavLink to='/Dropdown'>Dropdown page</NavLink>
          </Li>
          <Li>
            <NavLink to='/Counter'>Counter page</NavLink>
          </Li>
        </Ul>
      </Nav>
      <Outlet/>
        </>
    )
}

export default Layout;