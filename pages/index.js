import {Fragment} from "react";
import MainNavigation from "../Components/MainNavigation";
import IntroSection from "../Components/Sections/IntroSection";
import ProjectsSection from "../Components/Sections/ProjectsSection";
import ContactSection from "../Components/Sections/ContactSection";

const Home = () => {
    return (
        <Fragment>
          <MainNavigation />
          <IntroSection />
          <ProjectsSection />
          <ContactSection />
        </Fragment>
    );
};

export default Home;