import NavButton from "./UI/NavButton";
import classes from "./MainNavigation.module.css";
import Link from "next/link";


const MainNavigation = () => {

  return (
    <div className='content-wrapper'>
        <header className={classes.header}>
          <span data-testid="main_header">Your Name</span>
        </header>
        <div className={classes['vertical-lines-container']}>
            <div className={classes['line-left']} />
            <div className={classes['line-right']} />
        </div>
        <nav className={classes.nav}>
            <Link href='/#intro' passHref><NavButton btnText='INTRO'/></Link>
            <Link href='/#projects' passHref><NavButton btnText='PROJECTS'/></Link>
            <Link href='https://www.linkedin.com/' passHref><NavButton btnText='LINKEDIN'/></Link>
            <Link href='https://github.com/' passHref><NavButton btnText='GITHUB'/></Link>
            <Link href='/#contact' passHref><NavButton btnText='CONTACT'/></Link>
        </nav>
    </div>

  );
};

export default MainNavigation;