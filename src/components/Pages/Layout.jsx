import { NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
        
        <nav>
        <ul>
          <li>
            <NavLink to='/'>Home page</NavLink>
          </li>
          <li>
            <NavLink to='/Cats'>Cats page</NavLink>
          </li>
          <li>
            <NavLink to='/Gym'>Gym page</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
        </>
    )
}

export default Layout;