import styles from './index.module.css';
import { GetStaticProps } from 'next';
import { useGetAllVideosQuery, Tenant } from '@gsp-nextjs/data-access';
import { VideoCard } from '@br/br-web-components';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {
  const { loading, error, data } = useGetAllVideosQuery({variables: { tenant: Tenant.EstadioChile}});
  if (loading) return <p>loading...</p>;
  if(error) { 
    return `<p>ERROR MESSAGE: ${error}</p>`;
  }

  return (
    <div className={styles['container']}>
      <h1>Welcome to video, {props.name}</h1>
      <ul style={{ listStyleType: "none" }}>
        {data.getAllVideos.slice(0, 5).map((video)=> (
          <li key={video?.mediaId}>
            <VideoCard url="" img={video?.thumbnail} />
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: 'user@test.com'
    },
  };
};

export default About;
