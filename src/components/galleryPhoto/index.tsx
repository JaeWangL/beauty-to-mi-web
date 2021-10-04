import Link from 'next/link';
import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { HoverOverlay, MasonryItem } from './styles';

function GalleryPhoto(): JSX.Element {
  return (
    <MasonryItem>
      <HoverOverlay>
        <img alt="ImgGallery" className="img-fluid" src="/mock/img-1.jpg" />
        <div className="item-overlay" />
        <div className="image-description white-color">
          <div className="image-data">
            <h5 className="h5-sm">
              <Link href="/mock/img-1.jpg">Hot Stones Therapy</Link>
            </h5>
            <p>SPA & Massage Therapy</p>
          </div>
        </div>
      </HoverOverlay>
    </MasonryItem>
  );
}

export default memo(GalleryPhoto, IsEqual);
