'use client';

import { WorkDataType } from '@/app/lib/WorkData';
import '@/app/ui/WorkImages/WorkImages.scss';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

type WorkImagesProps = {
  workData: WorkDataType;
};

export default function WorkImages({ workData }: WorkImagesProps) {
  const { images, workLabel, workTitle } = workData;
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  return (
    <section className="workDetails__images">
      {images.map((image, key = 0) => {
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={key++}
            src={image.thumbnail || image.fullSize}
            onClick={() => setImageIndex((key - 1) % images.length)}
            alt={`${workLabel}-${workTitle}`}
            className="workDetails__images__image"
          />
        );
      })}
      <Lightbox
        plugins={[Captions, Thumbnails, Zoom]}
        open={imageIndex !== null}
        close={() => setImageIndex(null)}
        index={imageIndex || 0}
        slides={images.map(image => ({
          src: image.fullSize,
          alt: image.caption,
          title: `${workLabel} | ${workTitle} | ${image.subTitle}`,
          description: image.caption
        }))}
        carousel={{
          finite: true,
        }}
      />
    </section>
  );
}
