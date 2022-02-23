import classes from "./Layout.module.css";

import Image from "next/image";
import Head from "next/head";
import SmallBackButton from "./UI/SmallBackButton";
import Link from 'next/link';
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import ProjectModal from "./ProjectModal";

import {useState, useEffect, Fragment} from "react";

const Layout = (props) => {
    const projectsModalIsOpen = useSelector((state) => state.projectsModal.isOpen);
    const [pageScrolled, setPageScrolled] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onscroll = () => {
                if (document.documentElement.scrollTop || document.body.scrollTop > 20) {
                    setPageScrolled(true);
                } else {
                    setPageScrolled(false);
                }
            };
        }
    }, []);
    const scrollToTopHandler = () => {
        window.scrollTo(0, 0);
    };
    return (
        <Fragment>
            <Head>
                <title>Your Name</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ProjectModal />
            <Box className={classes['button-container']}>
            {
                (pageScrolled && !projectsModalIsOpen) &&
                <Link href='/' passHref>
                    <SmallBackButton btnName="to_top" btnText="to top" onClick={scrollToTopHandler}/>
                </Link>
            }
            </Box>
            <main className={classes.main}>
                {props.children}
                <div className={classes['image-container']}>
                    <Image src='/img/background_image.jpg'
                           layout='fill'
                           alt='background image'
                           objectFit='cover'
                           objectPosition='center'
                           className={classes['background-image']}
                    />
                </div>
            </main>
      </Fragment>
    );
};

export default Layout;