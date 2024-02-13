'use client'

import { log } from 'console';
import styles from './hero.module.css'
import Link from 'next/link';
import React, { useState } from "react";

export function Hero() {
    const [navActive, setNavActive] = React.useState(false);
console.log(navActive);
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

                <div className={styles.hero__menu__mobileMenu}>
                    <ul className={`${styles.hero__menu__mobileMenu__links}${navActive ? "" : " " + styles.hero__menu__mobileMenu__links__hidden}`}>
                    <li>
                        <Link href="#featured-work" className={styles.hero__menu__mobileMenu__links__link} onClick={() => setNavActive(false)}>Featured Work</Link>
                    </li>
                    <li>
                        <Link href="#contact" className={styles.hero__menu__mobileMenu__links__link} onClick={() => setNavActive(false)}>Contact</Link>
                    </li>
                    <li>
                        <Link href="http://linkedin.com/in/claudekiseke/" target="_blank" className={styles.hero__menu__mobileMenu__links__link}>LinkedIn</Link>
                    </li>
                    <li className={styles.hero__menu__mobileMenu__links__close} onClick={() => setNavActive(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                            <g id="Menu / Close_MD">
                                <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </svg>
                    </li>
                </ul>
                <button className={styles.hero__menu__mobileMenu__icon} onClick={() => setNavActive(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div><div className={styles.hero__aboutText}>
                <h3 className={styles.hero__aboutText__bio}>I&apos;m a London-based Front-End Developer with a love for design and making brands shine online.</h3>
                <p className={styles.hero__aboutText__about}>My work has ranged from sleek corporate websites to dynamic and interactive e-commerce platforms, that are not just functional but also beautifully aligned with each brand&apos;s identity, and has been featured in Forbes.</p>
            </div>
        </header>
    );
}