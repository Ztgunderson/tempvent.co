import { FC } from 'react';
import styles from './Team.module.css';

const Team: FC = () => {
  return (
    <section className={styles.team} id="team">
      <div className={styles.teamContent}>
        <h2>Our Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img src="/images/team/tomGunderson.png" alt="Tom Gunderson" className={styles.teamMemberImage} />
            <h3>Tom Gunderson</h3>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/team/zachGunderson.png" alt="Zach Gunderson" className={styles.teamMemberImage} />
            <h3>Zach Gunderson</h3>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/team/kevinArkin.jpg" alt="Kevin Arkin" className={styles.teamMemberImage} />
            <h3>Kevin Arkin</h3>
          </div>
        </div>
        <p className={styles.teamDescription}>One father, one son, one buddy</p>
      </div>
    </section>
  );
};

export default Team; 