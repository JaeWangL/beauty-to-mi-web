import { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IsEqual from 'react-fast-compare';
import { BottomFooter, FooterImageContainer, FooterLinkContainer, FooterWrapper } from './styles';

function Footer(): JSX.Element {
  return (
    <FooterWrapper className="bg-color-01 division">
      <Container>
        <Row>
          <Col md={5} lg={4}>
            <div className="mb-40">
              <img src="/images/logo.png" width="204" height="60" alt="footer-logo" />
              <p className="txt-color-05 mt-20">
                Aliquam nullam tempor sapien at gravida donec congue ipsum a porta magna and justo velna auctor sapien
                and augue
              </p>
            </div>
          </Col>
          <Col md={4} lg={3} xl={3}>
            <div className="footer-contacts mb-40">
              <h6 className="h6-lg txt-color-01">Let's Talk</h6>
              <p className="txt-color-05">121 King Street, Melbourne,</p>
              <p className="txt-color-05">Victoria 3000 Australia</p>
              <div className="txt-color-05 mt-15">
                <p className="footer-hightlight">
                  E: <a href="mailto:yourdomain@mail.com">hello@yourdomain.com</a>
                </p>
                <p>Phone: +12 9 8765 4321</p>
                <p>
                  Skype : <a href="tel:123456789">support.spamagic</a>
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} lg={2}>
            <FooterLinkContainer className="mb-40">
              <h6 className="h6-lg txt-color-01">Quick Links</h6>
              <ul className="txt-color-05 clearfix">
                <li>
                  <p>
                    <a href="#">About Us</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Advertising</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Help & FAQs</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Appointments</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Gift Cards</a>
                  </p>
                </li>
              </ul>
            </FooterLinkContainer>
          </Col>
          <Col md={12} lg={3}>
            <FooterImageContainer className="mb-40">
              <h6 className="h6-lg txt-color-01">Instagram</h6>
              <ul className="text-center clearfix">
                <li>
                  <a href="#" target="_blank">
                    <img className="insta-img" src="images/instagram/img-01.jpg" alt="insta-img" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img className="insta-img" src="images/instagram/img-02.jpg" alt="insta-img" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img className="insta-img" src="images/instagram/img-03.jpg" alt="insta-img" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img className="insta-img" src="images/instagram/img-04.jpg" alt="insta-img" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img className="insta-img" src="images/instagram/img-05.jpg" alt="insta-img" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img className="insta-img" src="images/instagram/img-06.jpg" alt="insta-img" />
                  </a>
                </li>
              </ul>
            </FooterImageContainer>
          </Col>
        </Row>
        <BottomFooter>

        </BottomFooter>
      </Container>
    </FooterWrapper>
  );
}

export default memo(Footer, IsEqual);
