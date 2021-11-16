import classes from "./NavButton.module.css";
import {forwardRef} from "react";

const NavButton = forwardRef(({onClick, href, ...props}, ref) => {
  return (
      <button name={props.btnName} onClick={onClick} className={classes.button}>
          <a href={href} ref={ref} rel="noreferrer" target="_blank">{props.btnText}</a>
      </button>
  );
});

NavButton.displayName = 'NavButton';

export default NavButton;