import { FC } from 'react';
import styles from './Team.module.css';

const Team: FC = () => {
  return (
    <section className={styles.team} id="team">
      <div className={styles.teamContent}>
        <h2>Our Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img src="/images/team/tomGunderson.png" alt="Tom Gunderson" />
            <h3>Tom Gunderson</h3>
            <p>Co-Founder & CEO</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/team/zachGunderson.png" alt="Zach Gunderson" />
            <h3>Zach Gunderson</h3>
            <p>Co-Founder & CTO</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/team/kevinArkin.jpg" alt="Kevin Arkin" />
            <h3>Kevin Arkin</h3>
            <p>Co-Founder & COO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 