import React from 'react'
import GtrFront from '../components/GtrFront'
import Logo from '../components/Logo'
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'

function Header() {
    return (
        <Container fluid>
            <Row >
                <Col className="rounded float-left">
                    <GtrFront />
                </Col>
                <Col className="logoMargin">
                    <Logo />
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Header