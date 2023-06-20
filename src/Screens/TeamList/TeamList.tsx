import { Link } from "react-router-dom";
import styles from "./TeamList.module.css";

function TeamList() {
  return (
    <div className={styles.container}>
      <Link to="new-team">New Team</Link>
    </div>
  );
}

export default TeamList;
