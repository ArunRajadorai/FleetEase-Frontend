// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Widget
import FooterMenu from '../../widget/footer-menu';
import { supportMenu } from '../../widget/footer-menu/data';

// Import styles
import './footer.scss';

function FooterCopyright() {
  // Current Year
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-copyright">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="copyright-text">
                ©Copyright {currentYear} <Link to="/">FleetEase</Link>{' '}
                Developed by{' '}
                <Link to="https://www.linkedin.com/in/arunkumar-rajadorai/">
                  Arunkumar Rajadorai
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FooterCopyright;
