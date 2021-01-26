import Head from 'next/head'
import {Container, Col, Row} from 'react-bootstrap';
import Navigation from './navigation';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Row>
            <Col md={3} id="sticky-sidebar">
              <Navigation></Navigation>
            </Col>
            <Col md={9}>
              <p>This is a test</p>
            </Col>
          </Row>
        </Container>
      </main>

    </div>
  )
}
