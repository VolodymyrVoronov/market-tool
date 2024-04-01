import styles from "./Spinner.module.css";

const Spinner = (): JSX.Element => {
  return (
    <div className={styles["lds-ripple"]} aria-label="Loading...">
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
