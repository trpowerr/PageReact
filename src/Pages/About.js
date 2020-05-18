import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column mt-2'>
                <Nav.Item>
                  <Nav.Link eventKey='first'> Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'> Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'> Programing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fourth'> Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fifth'> Libr</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey='first'>
                  <img src='https://image.freepik.com/free-vector/_23-2147844787.jpg' />
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a mi mollis, pellentesque nisl eu, efficitur tellus. Fusce molestie ipsum vitae pulvinar malesuada. Phasellus at.</p>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <img src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a mi mollis, pellentesque nisl eu, efficitur tellus. Fusce molestie ipsum vitae pulvinar malesuada. Phasellus at.</p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <img src='https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a mi mollis, pellentesque nisl eu, efficitur tellus. Fusce molestie ipsum vitae pulvinar malesuada. Phasellus at.</p>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth'>
                  <img src='https://www.alenibric.com.tr/wp-content/uploads/2019/12/frameworks1.png' />
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a mi mollis, pellentesque nisl eu, efficitur tellus. Fusce molestie ipsum vitae pulvinar malesuada. Phasellus at.</p>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth'>
                  <img src='https://senior.ua/storage/article/content/84775828-16c3-443f-aed4-84fd7b1e581e.jpeg' />
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a mi mollis, pellentesque nisl eu, efficitur tellus. Fusce molestie ipsum vitae pulvinar malesuada. Phasellus at.</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
