import { memo } from 'react';
import IsEqual from 'react-fast-compare';

function SectionPricing(): JSX.Element {
  return (
    <section>
      <p>Section Pricing</p>
    </section>
  );
}

export default memo(SectionPricing, IsEqual);
