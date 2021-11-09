import TextField from '@mui/material/TextField';
import {Fragment} from "react";
import classes from './ContactForm.module.css';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useContactFormControl from "../Hooks/useContactFormControl";
import CircularProgress from "@mui/material/CircularProgress";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const ContactForm = (props) => {

    const {
        handleFormSubmit,
        formState,
        emailInputChange,
        messageInputChange,
        emailInputBlur,
        messageInputBlur
    } = useContactFormControl();

    const emailObj = {
        name: 'email',
        domain: 'emaildomain.com',
    };
    const emailBtnHandler = (event) => {
        const emailSubject = 'subject';
        const address = `${emailObj.name}@${emailObj.domain}`;
        window.open(
          `mailto:${address}?subject=${emailSubject}&body=${formState.messageInputValue}`);
    };

    const styles = {
        backgroundColor: 'rgba(0, 0, 0, .5)',
        margin: '.5rem',
    };
    const inputStyles = {
    };
    const textAreaStyles = {
        height: '10rem',
    };

    return (
        <Fragment>
            {!formState.fetchComplete &&
            <span className={classes['message-box']}>
                <p>Use the form below or send me an &nbsp;{<Button className={classes['email-button']} onClick={emailBtnHandler}>Email</Button>}</p>
                <p>You can also contact me on <a href={`https://www.linkedin.com/`} rel="noreferrer" target="_blank"><u>LinkedIn</u></a></p>
            </span>
            }
            <br />
            {!formState.fetchComplete &&
            <form className={classes.form}>
                    <TextField size='large'
                               type="text"
                               name='email'
                               label='Email'
                               className={classes['input-wrapper']}
                               onBlur={emailInputBlur}
                               onChange={emailInputChange}
                               fullWidth
                               error={!!formState.emailErrors}
                               helperText={formState.emailErrors}
                               inputProps={{'aria-label': 'email'}}
                    />
                    <TextField size='large'
                               type="text"
                               name='message'
                               label='Message'
                               className={classes['input-wrapper']}
                               onBlur={messageInputBlur}
                               onChange={messageInputChange}
                               fullWidth
                               multiline={true}
                               minRows={7}
                               maxRows={7}
                               error={!!formState.messageErrors}
                               helperText={formState.messageErrors}
                               inputProps={{'aria-label': 'message'}}

                    />
                {!formState.loading &&
                <Button type='button'
                        onClick={handleFormSubmit}
                        className={classes.button}
                        disabled={!formState.formIsValid}
                        data-cy='contact-form-submit-button'>
                    SUBMIT
                </Button>
                }
                {formState.loading && <CircularProgress />}
            </form>
            }
            {(!formState.loading && formState.fetchStatus === 'success') &&
            <Box className={classes['message-box']} data-cy='message-success-box'>
                <CheckIcon className={`${classes.icon} ${classes.success}`} />
                <span>MESSAGE SENT</span>
            </Box>
            }
            {(!formState.loading && formState.fetchStatus === 'failed') &&
            <Box className={classes['message-box']} data-cy='message-fail-box'>
                <ClearIcon className={`${classes.icon} ${classes.fail}`} />
                <span>Oh No! Something went wrong and the message was not sent.</span>
                    <br />
                <p>Please send me an &nbsp;{
                    <Button className={classes['email-button']}
                            onClick={emailBtnHandler}
                            data-cy='contact-form-send-email-btn'>Email
                    </Button>
                }</p>
                <p>You can also contact me on <a href={`https://www.linkedin.com`} rel="noreferrer" target="_blank"><u>LinkedIn</u></a></p>
            </Box>
            }
        </Fragment>
    );
}

export default ContactForm;