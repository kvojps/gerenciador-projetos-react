import Message from '../layout/Message'
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'

import ProjectCard from '../project/ProjectCard'
import styles from './assets/Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'

function Projects() {

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch("http://localhost:5000/projects", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message} />}
            <div className={styles.project}>
                <Container customClass="start">
                    <div>{projects.length > 0 && 
                            projects.map((project) => (
                                <ProjectCard
                                    id={project.id} 
                                    name={project.name}
                                    budget={project.budget}
                                    category={project.category.name}
                                    key={project.id}
                                />
                            ))}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Projects