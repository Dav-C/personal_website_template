import classes from "./IntroSection.module.css";
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Box from "@mui/material/Box";
import Link from 'next/link';
import Image from "next/image";


const IntroSection = () => {

    return (
        <div id='intro' className='content-wrapper'>
            <header className={classes.header}>About Me</header>
            <section className={classes.section}>
                <Box className={classes['image-container']}>
                    <Image src='/img/pli1.png' height={200} width={200}/>
                </Box>
                <Box className={classes['description-text']}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet, atque autem consectetur culpa cum, dolore doloribus
                    eos eum explicabo fuga inventore provident quae quaerat quidem
                    repellendus temporibus ullam ut voluptas?
                </p>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias animi aperiam asperiores autem dolores eos et fugit
                    incidunt, iusto nam odio perferendis porro quae quo repellendus
                    unde vero voluptates voluptatum?
                </p>
                </Box>
            </section>
                <Box className={classes['button-box']}>
                    <Link href='/#projects'>
                        <Button variant="outlined"
                                startIcon={<ArrowDownwardIcon />}
                                data-cy='next-section-projects'>Projects
                        </Button>
                    </Link>
                </Box>
        </div>

    );
};

export default IntroSection;