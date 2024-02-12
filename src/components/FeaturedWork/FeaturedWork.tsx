import Image from 'next/image';
import styles from './featuredWork.module.css'
import Link from 'next/link';

export function FeaturedWork() {

    return (
        <div className={styles.featuredWork}>
            <h2 className={styles.featuredWork__heading}>I'm a London-based Front-End Developer with a love for design and making brands shine online.</h2>
            <h3 className={styles.featuredWork__subHeading}>My work has ranged from sleek corporate websites to dynamic and interactive e-commerce platforms, that are not just functional but also beautifully aligned with each brand's identity, and has been featured in Forbes.</h3>

            <div className={styles.featuredWork__caseStudy}>
                <div className={styles.featuredWork__caseStudy__featuredImage}>
                    <Image 
                        src="https://images.ctfassets.net/odkae62k89vn/G8qt5dvdfzOM3N7wOTXZG/dffaed055899bbb3bb2402a3622abb21/Jeffrey_Campbell_Proposed_Designs.png"
                        alt="Frshly Squeezd"
                        width={422}
                        height={358}
                    />
                </div>
                <div className={styles.featuredWork__caseStudy__caseStudyDescription}>
                    <h4>Jeffrey Campbell Shoes</h4>
                    <p>Combined Group Contracting (CGC) is one of the leading construction and contracting companies in the Middle East. CGC wanted to revamp its existing website since it looked outdated with poor design. Ali worked with Poixel to develop the new website on Webflow.</p>
                    <p>The final web design was achieved by Poixel's team. Ali worked on the pixel-perfect development of the final site with a few enhancements.The website was developed with the goal of keeping it simple to use, different from other competitor websites, and making it feel more like a digital company profile. Ali Saeed also helped with the copywriting for the website, to make sure it communicated the right message throughout the site.</p>
                    <li className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem}>
                        <Link href="#" className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem__link}>Featured Work</Link>
                    </li>
                    <li className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem}>
                        <Link href="#" className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem__link}>Contact</Link>
                    </li>
                    <li className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem}>
                        <Link href="#" className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem__link}>LinkedIn</Link>
                    </li>
                </div>
            </div>

            <div className={styles.featuredWork__caseStudy}>
                <div className={styles.featuredWork__caseStudy__featuredImage}>
                    <Image 
                        src="https://images.ctfassets.net/odkae62k89vn/4vLJOW2bEHUVStsK73czC8/52e0d4752e0a6cb3d6afb15fe901a922/Frshly_Squeezd.png"
                        alt="Frshly Squeezd"
                        width={701}
                        height={502}
                    />
                </div>
                <div className={styles.featuredWork__caseStudy__caseStudyDescription}>
                <h4>Jeffrey Campbell Shoes</h4>
                    <p>Combined Group Contracting (CGC) is one of the leading construction and contracting companies in the Middle East. CGC wanted to revamp its existing website since it looked outdated with poor design. Ali worked with Poixel to develop the new website on Webflow.</p>
                    <p>The final web design was achieved by Poixel's team. Ali worked on the pixel-perfect development of the final site with a few enhancements.The website was developed with the goal of keeping it simple to use, different from other competitor websites, and making it feel more like a digital company profile. Ali Saeed also helped with the copywriting for the website, to make sure it communicated the right message throughout the site.</p>
                    <li className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem}>
                        <Link href="#" className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem__link}>Featured Work</Link>
                    </li>
                    <li className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem}>
                        <Link href="#" className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem__link}>Contact</Link>
                    </li>
                    <li className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem}>
                        <Link href="#" className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem__link}>LinkedIn</Link>
                    </li>
                </div>
            </div>

            <div className={styles.featuredWork__caseStudy}>
                <div className={styles.featuredWork__caseStudy__featuredImage}>
                    <Image 
                        src="https://images.ctfassets.net/odkae62k89vn/68KXhnfTr8T0mMWj0nudwb/746dd2034d7f1b963ae076369308e759/GRL.png"
                        alt="Frshly Squeezd"
                        width={701}
                        height={502}
                    />
                </div>
                <div className={styles.featuredWork__caseStudy__caseStudyDescription}>
                <h4>Jeffrey Campbell Shoes</h4>
                    <p>Combined Group Contracting (CGC) is one of the leading construction and contracting companies in the Middle East. CGC wanted to revamp its existing website since it looked outdated with poor design. Ali worked with Poixel to develop the new website on Webflow.</p>
                    <p>The final web design was achieved by Poixel's team. Ali worked on the pixel-perfect development of the final site with a few enhancements.The website was developed with the goal of keeping it simple to use, different from other competitor websites, and making it feel more like a digital company profile. Ali Saeed also helped with the copywriting for the website, to make sure it communicated the right message throughout the site.</p>
                    <li className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem}>
                        <Link href="#" className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem__link}>Featured Work</Link>
                    </li>
                    <li className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem}>
                        <Link href="#" className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem__link}>Contact</Link>
                    </li>
                    <li className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem}>
                        <Link href="#" className={styles.featuredWork__caseStudy__caseStudyDescription__linkItem__link}>LinkedIn</Link>
                    </li>
                </div>
            </div>

        </div>
    );
}