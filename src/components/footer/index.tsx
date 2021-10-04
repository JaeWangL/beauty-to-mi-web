import Image from 'next/image';
import { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IsEqual from 'react-fast-compare';
import { useSettingsStore } from '@/hooks';
import { instagramImages } from './interfaces';
import {
  BottomContainer,
  ContentsContainer,
  FooterContainer,
  InstagramContainer,
  LinksContainer,
  SocialContainer,
  TextCopyright,
} from './styles';

function Footer(): JSX.Element {
  const { settings } = useSettingsStore();

  return (
    <FooterContainer className="division">
      <Container>
        <Row>
          <Col className="mb-40" md={5} lg={4}>
            <Image alt="ImgLogo" layout="fixed" width={204} height={60} src="/images/logo.png" />
            <p className="mt-20">
              연산동 네일샵 뷰티투미 입니다. 꼼꼼함과 유지력으로 고객님들의 네일을 관리하겠습니다.
            </p>
          </Col>
          <Col md={4} lg={3} xl={3}>
            <ContentsContainer className="mb-40">
              <h6>문의하기</h6>
              <p>부산광역시 연제구 월드컵대로</p>
              <p>114번길 13 2층 뷰티투미</p>
              <div className="mt-15">
                <p>오픈시간: AM9:00 ~ PM10:00</p>
                <p className="phone-number">
                  <a href="tel:+8201024216034">연락처: 010-2421-6034</a>
                </p>
              </div>
            </ContentsContainer>
          </Col>
          <Col md={3} lg={2}>
            <LinksContainer className="mb-40">
              <h6>바로가기</h6>
              <ul className="clearfix">
                <li>
                  <p>
                    <a href="#">예약하기</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">이벤트</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">자주붇는질문</a>
                  </p>
                </li>
              </ul>
            </LinksContainer>
          </Col>
          <Col md={12} lg={3}>
            <InstagramContainer className="mb-40">
              <h6>인스타그램</h6>
              <ul className="text-center clearfix">
                {instagramImages.map((i) => {
                  return (
                    <li key={i.index}>
                      <a href={i.linkUrl} target="_blank" rel="noreferrer noopener">
                        <img className="insta-img" src={i.imageUrl} alt="ImgInsta" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </InstagramContainer>
          </Col>
        </Row>
        <BottomContainer>
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <TextCopyright>&copy; 2021 Beauty to mi. All Rights Reserved</TextCopyright>
            </Col>
            <Col lg={6}>
              <SocialContainer className={`${settings.isMobile ? 'text-start' : 'text-end'} clearfix`}>
                <li>
                  <p className="first-list-link">
                    <a href="#">
                      <i className="fab fa-facebook-f" /> Naver
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">
                      <i className="fab fa-twitter" /> KaKao
                    </a>
                  </p>
                </li>
                <li>
                  <p className="last-li">
                    <a href="#">
                      <i className="fab fa-instagram" /> Instagram
                    </a>
                  </p>
                </li>
              </SocialContainer>
            </Col>
          </Row>
        </BottomContainer>
      </Container>
    </FooterContainer>
  );
}

export default memo(Footer, IsEqual);
