import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/logo192.png'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'> <img src={logo} alt="Costs" height="50px"/> </Link>
                <ul className={styles.list}>
                    <li className={styles.item}> <Link to="/">Home</Link> </li>
                    <li className={styles.item}> <Link to="/company">Empresa</Link> </li>
                    <li className={styles.item}><Link to="/projects">Projetos</Link> </li>
                    <li className={styles.item}><Link to="/newproject">Novo Projeto</Link> </li>
                    <li className={styles.item}><Link to="/contact">Contato</Link> </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar