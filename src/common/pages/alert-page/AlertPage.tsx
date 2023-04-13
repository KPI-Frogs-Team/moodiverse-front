import Alert from "@/common/components/alert";
import { AlertColor, AlertType } from "@/common/components/alert/Alert";

// import Alert, { AlertColor, AlertType } from './Alert';
import styles from "./AlertPage.module.scss";
const AlertPage = () => (
  <div className={styles["alert"]}>
    <Alert color={AlertColor.GREEN} type={AlertType.ERROR} />
  </div>
);
export default AlertPage;
