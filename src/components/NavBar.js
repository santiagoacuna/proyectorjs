import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink, NavItem} from 'reactstrap';
import Logo from './CardWidget';

const NavBar = (props) => {  
    return (

        <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="https://santiagoacuna.github.io/Proyecto-Coder/">
      <Logo/>
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="https://santiagoacuna.github.io/Proyecto-Coder/productos.html">
            Productos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://santiagoacuna.github.io/Proyecto-Coder/contacto.html">
            Contacto
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>

    );
  };
  
  export default NavBar;