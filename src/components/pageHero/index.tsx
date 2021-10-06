import Link from 'next/link';
import { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IsEqual from 'react-fast-compare';
import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbNavContainer, BreadcrumbList, HeroWrapper } from './styles';

type PageHeroProps = {
  title: string;
  description: string;
  heroImagePath: string;
};

function PageHero(props: PageHeroProps): JSX.Element {
  const { description, heroImagePath, title } = props;

  return (
    <HeroWrapper className="bg-fixed wide-100 division" backgroundImagePath={heroImagePath}>
      <Container>
        <Row>
          <Col md={10} xl={8} className="offset-md-1 offset-xl-2">
            <div className="text-center">
              <h2 className="h2-lg">{title}</h2>
              <p className="p-lg">{description}</p>
            </div>
          </Col>
        </Row>
        <BreadcrumbContainer>
          <Row>
            <Col>
              <BreadcrumbNavContainer>
                <BreadcrumbList>
                  <BreadcrumbItem className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem className="breadcrumb-item active">{title}</BreadcrumbItem>
                </BreadcrumbList>
              </BreadcrumbNavContainer>
            </Col>
          </Row>
        </BreadcrumbContainer>
      </Container>
    </HeroWrapper>
  );
}

export default memo(PageHero, IsEqual);
