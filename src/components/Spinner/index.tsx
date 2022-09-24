import styles from "./styles.module.scss";
export const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};
