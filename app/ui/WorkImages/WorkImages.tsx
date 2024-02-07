'use client';

import { WorkImageType } from '@/app/lib/WorkData';
import '@/app/ui/WorkImages/WorkImages.scss';
import { useWindowSize } from '@uidotdev/usehooks';
import { useState } from 'react';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

type WorkImagesProps = {
  images: WorkImageType[];
  workLabel: string;
  workTitle: string;
};

export default function WorkImages({ images, workLabel, workTitle }: WorkImagesProps) {
  const {height} = useWindowSize();
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  return (
    <section className="workDetails__images">
      {images.map((image, key = 0) => {
        return height === null ? <></> : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={key++}
            src={image.thumbnail}
            onClick={() => setImageIndex((key - 1) % images.length)}
            alt={`${workLabel}-${workTitle}`}
            className="workDetails__images__image"
          />
        );
      })}
      <Lightbox
        plugins={[Captions, Thumbnails]}
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
