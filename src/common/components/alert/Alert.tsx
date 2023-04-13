import styles from "@/common/components/alert/Alert.module.scss";

// const Alert = () => <div className={styles["first"]}>Hello</div>;
export enum AlertColor {
  RED = "lightcoral",
  BLUE = "lightblue",
  GREEN = "lightgreen",
  YELLOW = "lightyellow",
}

export enum AlertType {
  ERROR = "an error",
  WARNING = "a warning",
  INFO = "an info",
  SUCCESS = "a success",
}

interface AlertProps {
  color: AlertColor;
  type: AlertType;
}

// eslint-disable-next-line react/prop-types
const Alert: React.FC<AlertProps> = ({ color, type }) => {
  const getMessage = (type: AlertType) => {
    return `This is ${type} alert — check it out!`;
  };

  return (
    <div className={styles["alert"]} style={{ backgroundColor: color }}>
      {getMessage(type)}
    </div>
  );
};
export default Alert;
