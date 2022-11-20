
import { GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface VideoProps extends ParsedUrlQuery {
  slug: string;
}

export interface VideoDetailProps {
  mediaId: string;
}

export function Video(props: VideoDetailProps) {
  const router = useRouter();
 
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Welcome to the Video Page! </h1>
    </div>
  );
}

export const getStaticProps = async ({params}) => {
  try {
    return {
      props: {
        videoInfo: {
          getVideoById: {
            title: 'test video'
          }
        },
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export const getStaticPaths: GetStaticPaths<VideoProps> = async () => {
  const paths = [{params: { slug: '6182b67ff47455000893d5d1gh' }}];
  return {
    paths,
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    fallback: true,
  };
};

export default Video;
