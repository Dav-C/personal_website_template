import Modal from "@mui/material/Modal";
import classes from "./ProjectModal.module.css"
import Box from "@mui/material/Box";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Project from "./Project";
import LargeImageViewer from "./LargeImageViewer";
import {useDispatch, useSelector} from "react-redux";
import {projectImageFullViewActions, projectsModalActions} from "../store/projects-modal-slice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProjectModal = () => {
    const dispatch = useDispatch();
    const {
        projectName,
        projectDesc,
        projectTryItLink,
        projectCodeLink,
    } = useSelector((state) => state.projectsModal);
    const {
        imageSource,
    } = useSelector((state) => state.projectImageFullView);
    const projectsModalIsOpen = useSelector((state) => state.projectsModal.isOpen);
    const projectImageFullViewIsOpen = useSelector((state) => state.projectImageFullView.isOpen);

    const closeModalHandler = () => {
        dispatch(projectsModalActions.close());
        dispatch(projectImageFullViewActions.close());
    };
    const closeImageHandler = (event) => {
        dispatch(projectImageFullViewActions.close());
    };

    return (
        <Modal open={projectsModalIsOpen} className={classes.modal} onBackdropClick={closeModalHandler}>
            <Box className={classes['modal-box']} data-cy='projects-modal-content-box'>
                <header className={classes['modal-header']}>
                    <span>{projectName}</span>
                    {projectImageFullViewIsOpen &&
                        <IconButton
                            className={classes['back-button']}
                            onClick={closeImageHandler}
                            data-cy='image-close-button'>
                            <ArrowBackIcon fontSize="large"/>
                        </IconButton>
                    }
                    {!projectImageFullViewIsOpen &&
                        <IconButton onClick={closeModalHandler} data-cy='modal-close-button'>
                            <CloseIcon fontSize="large"/>
                        </IconButton>
                    }
                </header>
                <section className={classes['modal-section']}>
                    {!projectImageFullViewIsOpen &&
                        <Project
                        summary={projectDesc}
                        tryItLink={projectTryItLink}
                        codeLink={projectCodeLink}
                        />
                    }
                    {projectImageFullViewIsOpen &&
                        <LargeImageViewer imageSource={imageSource} dataCy='large-image-viewer'/>
                    }
                </section>
            </Box>
        </Modal>
    )
}

export default ProjectModal;