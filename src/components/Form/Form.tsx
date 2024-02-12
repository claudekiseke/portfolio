import styles from './form.module.css'

export function Form() {

    return (
        <div className={styles.contactForm}>
            <h2 className={styles.contactForm__heading}>Get in touch</h2>
            <form className={styles.contactForm__form}>
                <input type="text" name="first-name" placeholder="First Name" className={styles.contactForm__form__input} required />
                <input type="text" name="company" placeholder="Company (optional)" className={styles.contactForm__form__input} />
                <input type="text" name="email" placeholder="Email Address" className={styles.contactForm__form__input} required />
                <textarea name="message" placeholder="Message" className={styles.contactForm__form__input} required></textarea>
                <input type="submit" value="Submit" className={styles.contactForm__form__submit} />
            </form>
        </div>
    );
}