import Image from 'next/image';
import styles from './featuredWork.module.css'
import Link from 'next/link';

export function FeaturedWork() {

    return (
        <div className={styles.featured}>
        <div className={styles.featured__featuredWork}>
            <h2 className={styles.featured__featuredWork__heading}>Featured Personal Work</h2>
            <h3 className={styles.featured__featuredWork__subHeading}>Functional. SEO Optimized. CMS-Based</h3>

            <div className={styles.featured__featuredWork__caseStudy}>
                <div className={`${styles.featured__featuredWork__caseStudy__featuredImage} ${styles.featured__featuredWork__caseStudy__featuredImage__proposal}`}>
                    <span>Current design</span>
                    <span>Proposed design</span>
                <Image 
                        src="https://images.ctfassets.net/odkae62k89vn/4iyjeIBILMGSH97UCRRWwg/49990620bac56d7a347e5ff09bf14b48/Jeffrey_Campbell_Current_Designs.png"
                        alt="Frshly Squeezd"
                        width={297}
                        height={408}
                    />
                    <Image 
                        src="https://images.ctfassets.net/odkae62k89vn/G8qt5dvdfzOM3N7wOTXZG/dffaed055899bbb3bb2402a3622abb21/Jeffrey_Campbell_Proposed_Designs.png"
                        alt="Frshly Squeezd"
                        width={422}
                        height={358}
                    />
                </div>
                <div>
                    <h4 className={styles.featured__featuredWork__caseStudy__brand}>Jeffrey Campbell Shoes</h4>
                    <div className={styles.featured__featuredWork__caseStudy__caseStudyDescription}>
                        <p>Combined Group Contracting (CGC) is one of the leading construction and contracting companies in the Middle East. CGC wanted to revamp its existing website since it looked outdated with poor design. Ali worked with Poixel to develop the new website on Webflow.</p>
                    </div>
                    <ul className={styles.featured__featuredWork__caseStudy__links}>
                        <li className={styles.featured__featuredWork__caseStudy__links__linkItem}>
                        <Link href="#" target="_blank" className={styles.featured__featuredWork__caseStudy__links__linkItem__link}>View Design File</Link>
                    </li>
                    <li className={styles.featured__featuredWork__caseStudy__links__linkItem}>
                        <Link href="#" target="_blank" className={styles.featured__featuredWork__caseStudy__links__linkItem__link}>View Snippet Demo</Link>
                    </li>
                    <li className={styles.featured__featuredWork__caseStudy__links__linkItem}>
                        <Link href="#" target="_blank" className={styles.featured__featuredWork__caseStudy__links__linkItem__link}>View GitHub Code</Link>
                    </li>
                    </ul>
                </div>
            </div>

            <div className={styles.featured__featuredWork__caseStudy}>
                <div className={styles.featured__featuredWork__caseStudy__featuredImage}>
                    <Image 
                        src="https://images.ctfassets.net/odkae62k89vn/4vLJOW2bEHUVStsK73czC8/52e0d4752e0a6cb3d6afb15fe901a922/Frshly_Squeezd.png"
                        alt="Frshly Squeezd"
                        width={422}
                        height={358}
                    />
                </div>
                <div>
                    <h4 className={styles.featured__featuredWork__caseStudy__brand}>Frshly Squeezd</h4>
                    <div className={styles.featured__featuredWork__caseStudy__caseStudyDescription}>
                        <p>Combined Group Contracting (CGC) is one of the leading construction and contracting companies in the Middle East. CGC wanted to revamp its existing website since it looked outdated with poor design. Ali worked with Poixel to develop the new website on Webflow.</p>
                        <p>The final web design was achieved by Poixel&apos;s team. Ali worked on the pixel-perfect development of the final site with a few enhancements.The website was developed with the goal of keeping it simple to use, different from other competitor websites, and making it feel more like a digital company profile. Ali Saeed also helped with the copywriting for the website, to make sure it communicated the right message throughout the site.</p>
                    </div>
                    <ul className={styles.featured__featuredWork__caseStudy__links}>
                        <li className={styles.featured__featuredWork__caseStudy__links__linkItem}>
                        <Link href="#" target="_blank" className={styles.featured__featuredWork__caseStudy__links__linkItem__link}>View Design File</Link>
                    </li>
                    <li className={styles.featured__featuredWork__caseStudy__links__linkItem}>
                        <Link href="#" target="_blank" className={styles.featured__featuredWork__caseStudy__links__linkItem__link}>View Snippet Demo</Link>
                    </li>
                    <li className={styles.featured__featuredWork__caseStudy__links__linkItem}>
                        <Link href="#" target="_blank" className={styles.featured__featuredWork__caseStudy__links__linkItem__link}>View GitHub Code</Link>
                    </li>
                    </ul>
                </div>
            </div>

            <div className={styles.featured__featuredWork__caseStudy}>
                <div className={styles.featured__featuredWork__caseStudy__featuredImage}>
                    <Image 
                        src="https://images.ctfassets.net/odkae62k89vn/68KXhnfTr8T0mMWj0nudwb/746dd2034d7f1b963ae076369308e759/GRL.png"
                        alt="Frshly Squeezd"
                        width={422}
                        height={358}
                    />
                </div>
                <div>
                    <h4 className={styles.featured__featuredWork__caseStudy__brand}>GRL Magazine</h4>
                    <div className={styles.featured__featuredWork__caseStudy__caseStudyDescription}>
                        <p>Combined Group Contracting (CGC) is one of the leading construction and contracting companies in the Middle East. CGC wanted to revamp its existing website since it looked outdated with poor design. Ali worked with Poixel to develop the new website on Webflow.</p>
                        <p>The final web design was achieved by Poixel&apos;s team. Ali worked on the pixel-perfect development of the final site with a few enhancements.The website was developed with the goal of keeping it simple to use, different from other competitor websites, and making it feel more like a digital company profile. Ali Saeed also helped with the copywriting for the website, to make sure it communicated the right message throughout the site.</p>
                    </div>
                    <ul className={styles.featured__featuredWork__caseStudy__links}>
                        <li className={styles.featured__featuredWork__caseStudy__links__linkItem}>
                        <Link href="#" target="_blank" className={styles.featured__featuredWork__caseStudy__links__linkItem__link}>View Design File</Link>
                    </li>
                    <li className={styles.featured__featuredWork__caseStudy__links__linkItem}>
                        <Link href="#" target="_blank" className={styles.featured__featuredWork__caseStudy__links__linkItem__link}>View Snippet Demo</Link>
                    </li>
                    <li className={styles.featured__featuredWork__caseStudy__links__linkItem}>
                        <Link href="#" target="_blank" className={styles.featured__featuredWork__caseStudy__links__linkItem__link}>View GitHub Code</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
}