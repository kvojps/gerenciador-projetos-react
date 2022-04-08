import styles from './assets/Home.module.css'
import img from '../../img/logo512.png'

import LinkButton from '../layout/LinkButton'

function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>bazProjects</span></h1>
            <p>Comece a gerenciar os seus projetos!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={img} alt="bazProjects" />
        </section>
    ) 
}

export default Home