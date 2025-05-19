import { FC } from 'react'
import styles from './VideoPlayer.module.css'  // wherever your CSS module lives

const VideoPlayer: FC = () => {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/your-video-id"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default VideoPlayer
