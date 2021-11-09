import classes from './LargeImageViewer.module.css';
import Image from "next/image";
import {Fragment} from "react";
import {useDispatch} from "react-redux";
import {projectImageFullViewActions} from "../store/projects-modal-slice";

const LargeImageViewer = (props) => {
    const dispatch = useDispatch();

    const closeImageHandler = (event) => {
        dispatch(projectImageFullViewActions.close());
    };
    return (
        <Fragment>
            <section className={classes['image-container']}
                     onClick={closeImageHandler}
                     data-cy={props.dataCy}>
                <Image src={props.imageSource}
                       alt="project screenshot"
                       layout="fill"
                       objectFit="contain"
                       data-cy="large-image"

                />
            </section>
        </Fragment>
    );
};

export default LargeImageViewer;