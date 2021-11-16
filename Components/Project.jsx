import classes from './Project.module.css';
import {Fragment} from "react";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import {useDispatch, useSelector} from "react-redux";
import {projectImageFullViewActions, projectsModalActions} from "../store/projects-modal-slice";


const Project = (props) => {
    const dispatch = useDispatch();
    const projectImages = useSelector(
        (state) => state.projectsModal.projectImages
    );

    const codeLinkHandler = (event) => {
        window.open(props.codeLink, "_blank");
    };
    const tryItLinkHandler = (event) => {
        window.open(props.tryItLink, "_blank");
    };
    const openImageHandler = (event, imgSource) => {
        dispatch(projectImageFullViewActions.open());
        dispatch(projectImageFullViewActions.loadImage(imgSource));
    };

    return (
        <Fragment>
            <Box className={classes['button-box']}>
                <Button size="large"
                        className={`${classes.button} ${classes.blue}`}
                        variant='contained'
                        startIcon={<GitHubIcon />}
                        onClick={codeLinkHandler}
                        data-cy='project-code-button'>
                    CODE
                </Button>
                {props.tryItLink && <Button size="large"
                        variant='contained'
                        className={`${classes.button} ${classes.green}`}
                        color='success'
                        onClick={tryItLinkHandler}
                        data-cy='project-tryit-button'>
                    Try It!
                </Button>}
            </Box>
            <Box className={classes['content-box']}>
                <header>{props.summary}</header>
                <Box className={classes['gallery-box']}>
                    {projectImages.map((item) => (
                        <div key={item.id}
                             data-cy={`project-image-thumbnail-${item.id}`}
                             className={classes['gallery-item']}
                             onClick={(event) => openImageHandler(event, item.imgLarge)}>
                            <p className={classes['item-desc']}>{item.desc}</p>
                            <img className={classes['gallery-img']} src={item.imgSmall} loading='lazy' alt='gallery_image'/>
                        </div>
                    ))}
                </Box>
            </Box>
        </Fragment>
    );
};

export default Project;