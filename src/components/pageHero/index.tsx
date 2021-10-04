import Link from 'next/link';
import { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IsEqual from 'react-fast-compare';
import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbNav, BreadcrumbWrapper, HeroWrapper } from './styles';

type PageHeroProps = {
  title: string;
  description: string;
  heroImagePath: string;
};

function PageHero(props: PageHeroProps): JSX.Element {
  const { description, heroImagePath, title } = props;

  return (
    <HeroWrapper className="bg-fixed wide-100 page-hero-section division" imagePath={heroImagePath}>
      <Container>
        <Row>
          <Col md={10} xl={8} className="offset-md-1 offset-xl-2">
            <div className="hero-txt text-center white-color">
              <h2 className="h2-lg">{title}</h2>
              <p className="p-lg">{description}</p>
            </div>
          </Col>
        </Row>

        <BreadcrumbWrapper>
          <Row>
            <Col>
              <BreadcrumbContainer>
                <nav aria-label="breadcrumb">
                  <BreadcrumbNav>
                    <BreadcrumbItem>
                      <Link href="/" passHref>
                        <a>Home</a>
                      </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem className="active" aria-current="page">
                      Our Gallery
                    </BreadcrumbItem>
                  </BreadcrumbNav>
                </nav>
              </BreadcrumbContainer>
            </Col>
          </Row>
        </BreadcrumbWrapper>
      </Container>
    </HeroWrapper>
  );
}

export default memo(PageHero, IsEqual);
