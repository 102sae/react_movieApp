import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  //랜덤 클래스 name
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
