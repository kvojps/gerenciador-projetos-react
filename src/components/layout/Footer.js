import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './assets/Footer.module.css';

function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p className="copy_right">Kvojps &copy; 2022</p>
        </footer>
    )
}

export default Footer