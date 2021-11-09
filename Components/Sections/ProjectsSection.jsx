import classes from "./ProjectsSection.module.css";
import LargeButton from "../UI/LargeButton";
import {useDispatch} from "react-redux";
import {projectsModalActions} from "../../store/projects-modal-slice";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Box from "@mui/material/Box";
import Link from "next/link";

const ProjectsSection = () => {
    const dispatch = useDispatch();
    const openModalHandler = (event, projectId) => {
        dispatch(projectsModalActions.loadProjectData(projectId));
        dispatch(projectsModalActions.open());
    };

    return (
        <div id='projects' className='content-wrapper'>
            <header className={classes.header}>Projects</header>
            <section className={classes.section}>
                <LargeButton onClick={(event) => openModalHandler(event, 'project1')}
                             btnText='My Project 1'
                             icon='/img/project1/placeholder_icon.svg'
                             dataCy='project1-button'
                />
                <LargeButton onClick={(event) => openModalHandler(event, 'project2')}
                             btnText='My Project 2'
                             icon='/img/project2/placeholder_icon.svg'
                             dataCy='project2-button'
                />
                <LargeButton onClick={(event) => openModalHandler(event, 'project3')}
                             btnText='My Project 3'
                             icon='/img/project3/placeholder_icon.svg'
                             dataCy='project3-button'
                />
            </section>
            <Box className={classes['button-box']}>
                <Link href='/#contact'>
                    <Button variant="outlined"
                            startIcon={<ArrowDownwardIcon />}
                            data-cy='next-section-contact'>Contact
                    </Button>
                </Link>
            </Box>
        </div>

    );
};

export default ProjectsSection;