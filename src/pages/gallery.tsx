import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { Gallery } from '@/containers';

const GalleryPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Beauty To Mi | 아트모음" description="연산동 네일샵" />
      <Gallery />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default GalleryPage;
