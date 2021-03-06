import Message from '../layout/Message'
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import styles from './assets/Projects.module.css'

import ProjectCard from '../project/ProjectCard'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'

function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/projects", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resp) => resp.json())
            .then((data) => {
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 400)
    }, [])

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message} />}
            <div >
                <Container customClass="start">
                    <div className={styles.projects}>{projects.length > 0 && 
                            projects.map((project) => (
                                <ProjectCard
                                    id={project.id} 
                                    name={project.name}
                                    budget={project.budget}
                                    category={project.category.name}
                                    key={project.id}
                                />
                            ))}
                            {!removeLoading && <Loading/>}
                            {removeLoading && projects.length ===0 && (
                                <p>N??o h?? projetos cadastrados!</p>
                            )
                            }
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Projects