import React from 'react';
import { VideoCard } from './video-card';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Video Card',
  component: VideoCard,
};

export const Primary = () => (
  <VideoCard
    url=""
    img="https://img.bleacherreport.net/cms/media/image/08/bc/5e/86/77ef/4dff/a1da/fe80655874cf/crop_exact_gettyimages-1437799205.jpg?h=2887&q=90&w=4330"
  />
);
