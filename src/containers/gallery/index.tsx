import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IsEqual from 'react-fast-compare';
import { GalleryPhoto } from '@/components';
import { InnerLayout } from '@/layouts';
import { FilterContainer } from './styles';

function Gallery(): JSX.Element {
  const { t } = useTranslation(['common']);

  return (
    <InnerLayout title="Gallery" description="dasdadas" heroImagePath="/images/hero_gallery.jpg">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <FilterContainer className="mb-40">
              <button className="is-checked" type="button">
                All
              </button>
              <button type="button">Body Treatments</button>
              <button type="button">Massage</button>
              <button type="button">Aroma Therapy</button>
              <button type="button">Herbs</button>
            </FilterContainer>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <GalleryPhoto />
            <GalleryPhoto />
            <GalleryPhoto />
            <GalleryPhoto />
          </Col>
        </Row>
      </Container>
    </InnerLayout>
  );
}

export default memo(Gallery, IsEqual);
