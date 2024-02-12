import styles from './hero.module.css'
import Link from 'next/link';

export function Hero() {

    return (
        <header className={styles.hero}>
            <div className={styles.hero__menu}>
                <ul className={styles.hero__menu__leftMenu}>
                    <li>
                        <Link href="/" className={styles.hero__menu__leftMenu__link}><h1 className={styles.hero__menu__leftMenu__link__logo}>Claude Kiseke.</h1></Link>
                        <p className={styles.hero__menu__leftMenu__link__role}>Front-end developer</p>
                    </li>
                </ul>
                <ul className={styles.hero__menu__rightMenu}>
                    <li>
                        <Link href="#featured-work" className={styles.hero__menu__rightMenu__link}>Featured Work</Link>
                    </li>
                    <li className={styles.hero__menu__rightMenu}>
                        <Link href="#contact" className={styles.hero__menu__rightMenu__link}>Contact</Link>
                    </li>
                    <li className={styles.hero__menu__rightMenu}>
                        <Link href="http://linkedin.com/in/claudekiseke/" target="_blank" className={styles.hero__menu__rightMenu__link}>LinkedIn</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.hero__aboutText}>
                <h3 className={styles.hero__aboutText__bio}>I&apos;m a London-based Front-End Developer with a love for design and making brands shine online.</h3>
                <p className={styles.hero__aboutText__about}>My work has ranged from sleek corporate websites to dynamic and interactive e-commerce platforms, that are not just functional but also beautifully aligned with each brand&apos;s identity, and has been featured in Forbes.</p>
            </div>
        </header>
    );
}