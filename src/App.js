import React from 'react'
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="light" expand="lg">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          {/* Search Bar */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-auto">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Navigation Links */}
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Gundem</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Debe</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">#Iliskiler</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Siyaset</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">...</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Content */}
      <Container fluid className="my-3">
        <div className="d-flex">
          {/* Sidebar */}
          <div className="flex-shrink-0">
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link href="#">25 mart karnimin acikmasi</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">trollerin basliklarinin silinmesi</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">reactjs</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          {/* Selected Title Content */}
          <div className="ms-3">
            <h1>Selected Title</h1>
            <p>Author</p>
            <p>Date</p>
            <p>Content</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default App
