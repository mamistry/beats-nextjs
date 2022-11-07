import styles from './video.module.css';

/* eslint-disable-next-line */
export interface VideoProps {}

export function Video(props: VideoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Video!</h1>
    </div>
  );
}

export default Video;
