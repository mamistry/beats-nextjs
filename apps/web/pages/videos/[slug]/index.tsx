
import { GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Tenant, initializeApollo, GetVideoByIdDocument, GetVideoByIdQuery } from '@gsp-nextjs/data-access';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const DynamicVideoComponentWithNoSSR = dynamic(
  () => import('@gsp-nextjs/video').then((video) => video.VideoPlayer),
  { ssr: false }
)

/* eslint-disable-next-line */
export interface VideoProps extends ParsedUrlQuery {
  slug: string;
}

export interface VideoDetailProps {
  videoInfo: GetVideoByIdQuery;
  mediaId: string;
}

export function Video(props: VideoDetailProps) {
  const router = useRouter();
 
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Welcome to the Video Page! {props.videoInfo.getVideoById.title}</h1>
      <DynamicVideoComponentWithNoSSR />
    </div>
  );
}

export const getStaticProps = async ({params}) => {
  try {
    const client = initializeApollo();
    const { data } = await client.query({
      query: GetVideoByIdDocument,
      variables: { id: params.slug, tenant: Tenant.EstadioChile },
    });

    if (!data.getVideoById.title) {
      return {
        props: {
          videoInfo: null,
      },
        notFound: true,
        revalidate: 10, 
      }
    }
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
