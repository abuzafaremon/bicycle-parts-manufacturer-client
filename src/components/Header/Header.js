import { signOut } from "firebase/auth";
import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./Header.css";

function Header() {
  const [user] = useAuthState(auth);
  console.log(user);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <header className="sticky-top">
      {["md"].map((expand) => (
        <Navbar key={expand} variant="dark" bg="dark" expand={expand}>
          <Container>
            <Link className="nav-link fw-bold" to="/">
              <Navbar.Brand>
                <span className="text-danger">B</span>icycle{" "}
                <span className="text-danger">W</span>orld
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Bicycle World
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-2 align-items-center">
                  <Link className="nav-link rounded p-2" to="/">
                    Home
                  </Link>
                  <Link className="nav-link rounded p-2" to="/purchase">
                    Purchase
                  </Link>
                  {user ? (
                    <Dropdown>
                      <Dropdown.Toggle className="border-0 nav-link">
                        {user?.photoURL ? (
                          <img
                            src={user?.photoURL && user.photoURL}
                            alt={user?.displayName?.split(" ")[0]}
                          />
                        ) : (
                          user?.displayName?.split(" ")[0]
                        )}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="bg-grd border-0">
                        <Dropdown.Item>Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">
                          Dashboard
                        </Dropdown.Item>
                        {/* <Dropdown.Item href="#/action-3"></Dropdown.Item> */}
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <Link className="nav-link rounded p-2" to="/login">
                      Login
                    </Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  );
}

export default Header;
