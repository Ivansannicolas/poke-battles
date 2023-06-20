import { Link, useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

type DashboardNavigation = "teams";

function Dashboard() {
  return (
    <div className={styles.container}>
      <Link to="teams">Teams</Link>
    </div>
  );
}

export default Dashboard;
