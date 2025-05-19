import { FC } from 'react';
import Image from 'next/image';
import styles from './Team.module.css';

const isProd = process.env.NODE_ENV === "production";

const Team: FC = () => {
  return (
    <section className={styles.team}>
      <h2>Meet the Team</h2>
      <div className={styles.teamGrid}>
        <div className={styles.teamMember}>
          <Image
            src={`${isProd ? '/tempvent.co' : ''}/images/team/tomGunderson.png`}
            alt="Tom Gunderson"
            width={120}
            height={120}
            className={styles.teamMemberImage}
          />
          <h3>Tom Gunderson</h3>
        </div>
        <div className={styles.teamMember}>
          <Image
            src={`${isProd ? '/tempvent.co' : ''}/images/team/zachGunderson.png`}
            alt="Zach Gunderson"
            width={120}
            height={120}
            className={styles.teamMemberImage}
          />
          <h3>Zach Gunderson</h3>
        </div>
        <div className={styles.teamMember}>
          <Image
            src={`${isProd ? '/tempvent.co' : ''}/images/team/kevinArkin.jpg`}
            alt="Kevin Arkin"
            width={120}
            height={120}
            className={styles.teamMemberImage}
          />
          <h3>Kevin Arkin</h3>
        </div>
      </div>
      <p className={styles.teamDescription}>One father, one son, and one buddy</p>
    </section>
  );
};

export default Team; 