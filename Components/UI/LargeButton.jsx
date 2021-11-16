import classes from './LargeButton.module.css';
import Image from 'next/image';
import {useState} from "react";
import Box from '@mui/material/Box';

const LargeButton = (props) => {
  const [iconVisible, setIconVisible] = useState(true);

  const mouseEnterHandler = (event) => {
        setIconVisible(false);
    };
  const mouseLeaveHandler = (event) => {
        setIconVisible(true);
    };

  const iconClasses = `${classes['image-container']} ${iconVisible ? '' : classes['animate-width']}`;

  return (
      <Box className={classes['button-container']}>
          <button onClick={props.onClick}
                  className={classes.button}
                  data-cy={props.dataCy}
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler}>
                  <Box className={iconClasses}>
                      {iconVisible &&
                          <Image src={props.icon ? props.icon : '/'}
                                 width={50}
                                 height={50}
                                 alt='button_icon'/>
                      }
                  </Box>
                <Box className={classes['button-text']}>
                    {props.btnText}
                </Box>
          </button>
      </Box>
  );
};

export default LargeButton;