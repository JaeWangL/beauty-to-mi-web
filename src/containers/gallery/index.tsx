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
    <InnerLayout title="아트 모음" description="dasdadas" heroImagePath="/images/hero_gallery.jpg">
      <section className="bg-color-01 wide-80 division">
        <Container>
          <Row>
            <Col lg={10} className="offset-lg-1">
              <div className="section-title mb-60 text-center">
                <h2 className="tra-header txt-color-02">Beauty To Mi</h2>
                <h3 className="h3-xl txt-color-01">Our Arts</h3>
                <p className="p-lg txt-color-05">
                  계절 및 컨셉별 아트가 매달 업데이트 되고 있습니다. 원하시는 아트를 선택하신 후 예약을 하시면
                  고객님들에게 맞춤형 네일을 해드릴 수 있습니다.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="text-center">
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
              <GalleryPhoto
                title="dasd"
                description="asdasd"
                imagePath="/images/hero_gallery.jpg"
                imageLink="https://www.naver.com"
              />
              <GalleryPhoto
                title="dasd"
                description="asdasd"
                imagePath="/images/hero_gallery.jpg"
                imageLink="https://www.naver.com"
              />
              <GalleryPhoto
                title="dasd"
                description="asdasd"
                imagePath="/images/hero_gallery.jpg"
                imageLink="https://www.naver.com"
              />
              <GalleryPhoto
                title="dasd"
                description="asdasd"
                imagePath="/images/hero_gallery.jpg"
                imageLink="https://www.naver.com"
              />
              <GalleryPhoto
                title="dasd"
                description="asdasd"
                imagePath="/images/hero_gallery.jpg"
                imageLink="https://www.naver.com"
              />
              <GalleryPhoto
                title="dasd"
                description="asdasd"
                imagePath="/images/hero_gallery.jpg"
                imageLink="https://www.naver.com"
              />
              <GalleryPhoto
                title="dasd"
                description="asdasd"
                imagePath="/images/hero_gallery.jpg"
                imageLink="https://www.naver.com"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </InnerLayout>
  );
}

export default memo(Gallery, IsEqual);
