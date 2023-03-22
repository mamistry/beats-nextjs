import styles from './index.module.css';
import { GetStaticProps } from 'next';
//import Image from 'next/image';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {

  return (
    <div className={styles['container']}>
      <h1>Welcome to test video sir, {props.name}</h1>
      {/* <Image src={'https://wallpaperset.com/w/full/8/3/f/119999.jpg'} layout="responsive" width={'100%'} height={'55%'} /> */}
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
