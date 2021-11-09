import classes from './ContactSection.module.css';
import ContactForm from "../ContactForm";

const ContactSection = () => {
    return (
        <div id='contact' className='content-wrapper'>
            <header className={classes.header}>Contact</header>
            <section className={classes.section}>
                <ContactForm />
            </section>
        </div>

    );
};

export default ContactSection;