import React from "react";

import styles from "@/common/components/alert/Alert.module.scss";

export enum AlertColor {
  RED = "lightcoral",
  BLUE = "lightblue",
  GREEN = "lightgreen",
  YELLOW = "lightyellow",
}

export enum AlertType {
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  SUCCESS = "success",
}

interface AlertProps {
  color: AlertColor;
  type: AlertType;
}

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
