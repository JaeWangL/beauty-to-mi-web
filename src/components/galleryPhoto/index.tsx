import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { PhotoWrapper } from './styles';

type GalleryPhotoProps = {
  title: string;
  description: string;
  imagePath: string;
  imageLink: string;
};
function GalleryPhoto(props: GalleryPhotoProps): JSX.Element {
  const { description, imageLink, imagePath, title } = props;

  return (
    <PhotoWrapper>
      <div className="hover-overlay">
        <img className="img-fluid" src={imagePath} alt="img-gallery" />
        <div className="item-overlay" />
        <div className="image-description">
          <div className="image-data">
            <h5 className="h5-sm">
              <a target="_blank" rel="noopener noreferrer" className="image-link" href={imageLink}>
                {title}
              </a>
            </h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </PhotoWrapper>
  );
}

export default memo(GalleryPhoto, IsEqual);
