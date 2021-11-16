import classes from './SmallBackButton.module.css';
import Button from "@mui/material/Button";
import {forwardRef} from "react";

const SmallBackButton = forwardRef(({onClick, href, ...props}, ref) => {
  return (
      <Button name={props.btnName} onClick={onClick} className={classes.button}>
          <a href={href} ref={ref}>{props.btnText}</a>
      </Button>
  );
});

SmallBackButton.displayName = 'SmallBackButton';

export default SmallBackButton;