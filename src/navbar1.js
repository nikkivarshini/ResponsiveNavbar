import React from 'react';
import{Navbar,Nav,Container} from 'react-bootstrap';



function Navbar1()
{

    return (
        <div>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/#'>Home</Nav.Link>
                        <Nav.Link href='/#'>Work</Nav.Link>
                        <Nav.Link href='/#'>job</Nav.Link>
                        <Nav.Link href='/#'>Blog</Nav.Link>
                        <Nav.Link href='/#'>course</Nav.Link>
                        <Nav.Link href='/#'>project</Nav.Link>
                        <Nav.Link href='/#'>About</Nav.Link>
                        <Nav.Link href='/#'>Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    )
}

export default Navbar1;