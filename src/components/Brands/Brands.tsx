import Image from 'next/image';
import styles from './brands.module.css'

export function Brands() {

    return (
        <div className={styles.brands}>
            <h2 className={styles.brands__heading}>Grateful to have previously worked with</h2>
            <div className={styles.brands__brandsList}>
                <ul className={styles.brands__brandsList__list}>
                    <li className={styles.brands__brandsList__list__listItem}>
                        <Image
                            src="https://images.ctfassets.net/odkae62k89vn/1DYN2xsivYQaff5oncmWRO/77349b7862bdfd4a764b4df40e4c4ce9/Laithwaites.svg"
                            alt="Laithwaites"
                            width={190}
                            height={41}
                        />
                        <Image
                            src="https://images.ctfassets.net/odkae62k89vn/8r8moUjWS86VC4DNqRzNb/7b9cb51b2ff180005c16827d4abed07c/Ocado.svg"
                            alt="Ocado"
                            width={176}
                            height={41}
                        />
                        <Image
                            src="https://images.ctfassets.net/odkae62k89vn/8obVq2f5zfThSmDcBpIlV/e6c30202d2abc7efcb9ca9125d5fb43a/Hobbs.svg"
                            alt="Hobbs"
                            width={134}
                            height={41}
                        />
                        <Image
                            src="https://images.ctfassets.net/odkae62k89vn/1QXllQfKX7cVJKIyEKU8nH/0f2bd329eae6c0e5f73460cda76a23a9/AllenOvery.svg"
                            alt="Allen & Overy"
                            width={240}
                            height={41}
                        />
                        <Image
                            src="https://images.ctfassets.net/odkae62k89vn/3zjo17sFWM9sYU7j3gMZP8/f18096f1384798ffaf74c6c1f0da22b5/Clarion.svg"
                            alt="Clarion Housing"
                            width={104}
                            height={45}
                        />
                        <Image
                            src="https://images.ctfassets.net/odkae62k89vn/2U6Ig7cU8eNYvTPOL6xYTT/0eeb4011fba204984fd96dd8d5f97c66/Colt.svg"
                            alt="Colt"
                            width={105}
                            height={41}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}