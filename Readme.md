# Next.js Website Template
### A personal website template, built using Next.js and Redux.
_________________________

### Getting Started
___________________
Install dependencies

    npm install

Start the development server

    npm dev start

Open a browser and view the site

    http://localhost:3000

### Customize the site for your use case
_______________________________________

- #### Add Your Name

In `MainNavigation.jsx`, change "your name"
    
        <header className={classes.header}>
          <span data-testid="main_header">Your Name</span>
        </header>

- #### Add an Intro

The text for the intro section header and body can be found in `Sections/IntroSection.jsx`
Simply swap out the Lorem ipsum text and change the image src attribute to match
the image location.

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

- #### Customize the Main Navigation

Also in `MainNavigation.jsx` are 5 `UI/NavButton.jsx` components.  The number of
buttons can be changed to suit your needs.  Intro, Projects and Contact scroll
to different sections on the page, however the gitHub and Linkedin buttons 
open an external page.  The `btnName` prop determines the button text.  

If the names are changed from the defaults, test file 
`cypress/integration/tests/main_navigation.js`will need to be updated to 
reflect the new button names or the navigation tests will fail.

    <nav className={classes.nav}>
        <Link href='/#intro' passHref><NavButton btnText='INTRO'/></Link>
        <Link href='/#projects' passHref><NavButton btnText='PROJECTS'/></Link>
        <Link href='https://www.linkedin.com/'><NavButton btnText='LINKEDIN'/></Link>
        <Link href='https://github.com/'><NavButton btnText='GITHUB'/></Link>
        <Link href='/#contact' passHref><NavButton btnText='CONTACT'/></Link>
    </nav>

- #### Customize the Projects Section

The template comes with 3 project buttons by default, but more or less can be used.
`ProjectSection.jsx` contains 3 `UI/LargeButton.jsx` components that that open
the project modal and populate it with data.  The `btnText` prop determines the
text on the button, `icon` accepts an image that appears on the left side of 
the button.  An SVG icon with a size of 50px X 50px fits best. `dataCy` sets 
a `data-cy` attribute on the button element which is used for testing purposes.
To update the tests based on your customization see 
`cypress/integration/tests/projects_section.js`.


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

The `LargeButton.jsx` components trigger `ProjectModal.jsx` which pulls data 
from `store/projects-modal-slice.js`  based on the string passed to 
`openModalHandler`. For example, if the `openModalHandler` on the 
`LargeButton.jsx` component looks like this:

    onClick={(event) => openModalHandler(event, 'project1')}

'project1' from `store/projects-modal-slice.js` will be loaded into `ProjectModal.jsx`

`store/projects-modal-slice.js` should contain a `projectData` object with the 
info for each project.  

    const project01ImageData = [
        {
            id: 1,
            imgSmall: '/img/project1/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 2,
            imgSmall: '/img/project1/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
    ]

The image paths and descriptions should be placed in an array of objects. The number of images is not set,  add as many as are needed and the modal 
will be populated.

    const project01ImageData = [
        {
            id: 1,
            imgSmall: '/img/project1/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },

- #### Customize the Contact Section

The contact section contains a `ContactForm.jsx` component that uses the 
`Hooks/useContactFormControl.jsx` custom hook for local form validation. The 
custom hook is also where the logic for handling the form contact form 
submission should be placed.  By default, the contact form simply 
prints a message to the console.  

`async function handleFormSubmit() {}`
is called when the form is submitted.

In `ContactForm.jsx`, `emailObj` holds the necessary information
to construct an email button that is displayed in the event that the form
submission fails.  Change the values to match the desired email.  After a form
fails to submit the email button and a link is displayed to give users
an alternate way to get in touch.  This action is hidden in a function to 
protect the email address from scrapers.
    
    const emailObj = {
        name: 'email',
        domain: 'emaildomain.com',
    };

The alternate contact link defaults to Linkedin, but can be changed on this line

    <p>You can also contact me on <a href={`https://www.linkedin.com`} rel="noreferrer" target="_blank"><u>LinkedIn</u></a></p>

### Testing
_______________________________________

There are a variety of tests available for the main application functions. 
Running all the tests will generate a coverage report in `coverage/lcov-report/index.html`
To run all tests use:

    cypress run

To open the cypress interactive console use:

    cypress open

### Licence
_______________________________________
Copyright 2021 David Cates

Permission is hereby granted, free of charge, to any person obtaining a 
copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included 
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS 
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR 
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
OTHER DEALINGS IN THE SOFTWARE.