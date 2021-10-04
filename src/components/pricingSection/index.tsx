import { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IsEqual from 'react-fast-compare';
import { PricingContainer } from './styles';

function PricingSection(): JSX.Element {
  return (
    <PricingContainer id="pricing" className="wide-60 division">
      <Container>
        <Row>
          <Col lg={20}>
            <div className="section-title mb-60 text-center">
              <h2 className="tra-header txt-color-02">Beauty To Mi</h2>
              <h3 className="h3-xl txt-color-01">Caring For Your Comforts</h3>
              <p className="p-lg txt-color-05">
                Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a
                cursus varius at magna tempor
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <ul>
              <li className="pricing-list-txt">
                <h5 className="h5-md txt-color-01">Swedish Massage</h5>
                <p className="txt-color-05">50 Minute Session Packages</p>
                <h4 className="h4-xs pricing-list-amount txt-color-01">$60</h4>
              </li>

              <li className="pricing-list-txt">
                <h5 className="h5-md txt-color-01">Combination Massage</h5>
                <p className="txt-color-05">60 Minute Session Packages</p>
                <h4 className="h4-xs pricing-list-amount txt-color-01">$65</h4>
              </li>

              <li className="pricing-list-txt">
                <h5 className="h5-md txt-color-01">Deep Tissue Massage</h5>
                <p className="txt-color-05">45 Minute Session Packages</p>
                <h4 className="h4-xs pricing-list-amount txt-color-01">$65</h4>
              </li>

              <li className="pricing-list-txt">
                <h5 className="h5-md txt-color-01">Hot Stone Massage</h5>
                <p className="txt-color-05">55 Minute Session Packages</p>
                <h4 className="h4-xs pricing-list-amount txt-color-01">$84</h4>
              </li>

              <li className="pricing-list-txt resp-lst">
                <h5 className="h5-md txt-color-01">Relaxing Massage</h5>
                <p className="txt-color-05">60 Minute Session Packages</p>
                <h4 className="h4-xs pricing-list-amount txt-color-01">$55</h4>
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            <ul>
              <li className="pricing-list-txt">
                <h5 className="h5-md txt-color-01">Aroma- Balance</h5>
                <p className="txt-color-05">50 Minute Session Packages</p>
                <h4 className="h4-xs pricing-list-amount txt-color-01">$80</h4>
              </li>

              <li className="pricing-list-txt">
                <h5 className="h5-md txt-color-01">Supreme Skicare</h5>
                <p className="txt-color-05">60 Minute Session Packages</p>
                <h4 className="h4-xs pricing-list-amount txt-color-01">$119</h4>
              </li>

              <li className="pricing-list-txt">
                <h5 className="h5-md txt-color-01">Calming Facial</h5>
                <p className="txt-color-05">55 Minute Session Packages</p>
                <h4 className="h4-xs pricing-list-amount txt-color-01">$87</h4>
              </li>

              <li className="pricing-list-txt">
                <h5 className="h5-md txt-color-01">Aromatherapy Facial</h5>
                <p className="txt-color-05">70 Minute Session Packages</p>
                <h4 className="h4-xs pricing-list-amount txt-color-01">$95</h4>
              </li>

              <li className="pricing-list-txt">
                <h5 className="h5-md txt-color-01">Coconut Body</h5>
                <p className="txt-color-05">40 Minute Session Packages</p>
                <h4 className="h4-xs pricing-list-amount txt-color-01">$90</h4>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </PricingContainer>
  );
}

export default memo(PricingSection, IsEqual);
