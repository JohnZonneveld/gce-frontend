import React from 'react'
import Timeline from '../components/Timeline'
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'
 
function Footer() {
    return (
        <Container fluid>
            <Row >
                <Col className="footer">
                    <Timeline />
                </Col>
            </Row>
        </Container> 
    );
}

export default Footer