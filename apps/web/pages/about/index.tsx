import styles from './index.module.css';
import { GetStaticProps } from 'next';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {

  return (
    <div className={styles['container']}>
      <h1>Welcome to video, {props.name}</h1>
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
