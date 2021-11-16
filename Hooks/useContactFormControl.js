import {useState, useReducer, useEffect} from "react";


const formReducer = (state, action) => {
  switch (action.type) {
      case 'EMAIL_INPUT_CHANGE':
        const emailValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(action.val);
        if (state.emailBlurred) {
            return {
                ...state,
                emailIsValid: emailValid,
                emailErrors: emailValid ? "" : "Please enter a valid email",
                emailInputValue: action.val,
            };
        } else {
            return {
                ...state,
                emailIsValid: emailValid,
                emailInputValue: action.val,
            };
        }

      case 'EMAIL_INPUT_BLUR':
        if (state.emailInputValue === '') {
            return {
                ...state,
                emailBlurred: true,
                emailErrors: "please enter a valid email"
            };
        } else {
            const emailValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(state.emailInputValue);
            return {
                ...state,
                emailBlurred: true,
                emailIsValid: emailValid,
                emailErrors: emailValid ? "" : "please enter a valid email",
            };
        }
      case 'MESSAGE_INPUT_CHANGE':
        const messageValid = state.messageInputValue.trim().length > 5;
        if (state.messageBlurred) {
            return {
                ...state,
                messageIsValid: messageValid,
                messageErrors: messageValid ? "" : "please enter a message",
                messageInputValue: action.val,
            };
        } else {
            return {
                ...state,
                messageIsValid: messageValid,
                messageInputValue: action.val,

            };
        }
      case 'MESSAGE_INPUT_BLUR':
        if (state.messageInputValue === '') {
            return {
                ...state,
                messageBlurred: true,
                messageErrors: "please enter a message"
            };
        } else {
            const messageValid = state.messageInputValue.trim().length > 5;
            return {
                ...state,
                messageBlurred: true,
                messageIsValid: messageValid,
                messageErrors: messageValid ? "" : "please enter a message",
            };
        }
      case 'FORM_VALIDATION_CHECK':
            return {
                ...state,
                formIsValid: state.emailIsValid && state.messageIsValid
            };
        case 'FETCH_STARTED':
            return {
                ...state,
                fetchStatus: 'fetching',
                fetchError: null,
                messageSent: null,
                loading: true,
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                fetchStatus: 'success',
                fetchComplete: true,
                fetchError: null,
                loading: false,
            };
        case 'FETCH_FAILED':
            return {
                ...state,
                fetchStatus: 'failed',
                fetchComplete: true,
                fetchError: action.val,
                loading: false,
            };
      default: return state;
    }
};

 const useContactFormControl = () => {
    let _csrfToken = null;

    const [formState, dispatchForm] = useReducer(formReducer, {
        emailInputValue: '',
        messageInputValue: '',
        emailErrors: '',
        messageErrors: '',
        emailBlurred: false,
        messageBlurred: false,
        emailIsValid: false,
        messageIsValid: false,
        fetchStatus: '',
        fetchError: null,
        fetchComplete: false,
        formIsValid: false,
        loading: false,
    });


    const emailInputChange = (event) => {
        dispatchForm({type: 'EMAIL_INPUT_CHANGE', val: event.target.value});
        dispatchForm({type: 'FORM_VALIDATION_CHECK'});
    };
    const emailInputBlur = (event) => {
        dispatchForm({type: 'EMAIL_INPUT_BLUR'});
        dispatchForm({type: 'FORM_VALIDATION_CHECK'});
    };
    const messageInputChange = (event) => {
        dispatchForm({type: 'MESSAGE_INPUT_CHANGE', val: event.target.value});
        dispatchForm({type: 'FORM_VALIDATION_CHECK'});
    };
    const messageInputBlur = (event) => {
        dispatchForm({type: 'MESSAGE_INPUT_BLUR'});
        dispatchForm({type: 'FORM_VALIDATION_CHECK'});
    };

    async function handleFormSubmit() {
        //scroll to the bottom of the page after a form submit to make sure the form is visible
        //when a virtual keyboard closes.
        setTimeout(() => {
            const href = window.location.href;
            window.location.replace(href);
        }, 100);

        // HANDLE THE SUBMITTED FORM DATA HERE

        dispatchForm({type: 'FETCH_FAILED'});
        console.log('FORM SUBMITTED')
    }
    return {
        handleFormSubmit,
        formState,
        emailInputChange,
        messageInputChange,
        emailInputBlur,
        messageInputBlur
    };

};

export default useContactFormControl;