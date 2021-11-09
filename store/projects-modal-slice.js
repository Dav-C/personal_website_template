import {createSlice} from "@reduxjs/toolkit";

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
        {
            id: 3,
            imgSmall: '/img/project1/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 4,
            imgSmall: '/img/project1/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 5,
            imgSmall: '/img/project1/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 6,
            imgSmall: '/img/project1/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
    ];

    const project02ImageData = [
        {
            id: 1,
            imgSmall: '/img/project2/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 2,
            imgSmall: '/img/project2/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 3,
            imgSmall: '/img/project2/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 4,
            imgSmall: '/img/project2/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 5,
            imgSmall: '/img/project2/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 6,
            imgSmall: '/img/project2/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
    ];
    const project03ImageData = [
        {
            id: 1,
            imgSmall: '/img/project3/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 2,
            imgSmall: '/img/project3/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 3,
            imgSmall: '/img/project3/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 4,
            imgSmall: '/img/project3/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 5,
            imgSmall: '/img/project3/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
        {
            id: 6,
            imgSmall: '/img/project3/placeholder_image_small.jpg',
            imgLarge: '/img/project3/placeholder_image_large.jpg',
            desc: 'image description here'
        },
    ];

    const projectData = {
        project1: {
            projectName: 'My Project 1',
            projectDesc: 'Describe details about this project here.',
            projectTryItLink: 'https://www.github.com',
            projectCodeLink: 'https://www.github.com',
            projectImages: project01ImageData,
        },
        project2: {
            projectName: 'My Project 2',
            projectDesc: 'Describe details about this project here.',
            projectTryItLink: 'https://www.github.com',
            projectCodeLink: 'https://www.github.com',
            projectImages: project02ImageData,
        },
        project3: {
            projectName: 'My Project 3',
            projectDesc: 'Describe details about this project here.',
            projectTryItLink: 'https://www.github.com',
            projectCodeLink: 'https://www.github.com',
            projectImages: project03ImageData,
        },
    };

const projectsModalInitialState = {
    isOpen: false,
    projectName: 'project name',
    projectDesc: 'project description',
    projectImages: [],
    projectTryItLink: '',
    projectCodeLink: '',
};

const projectsModalSlice = createSlice({
    name: 'projectsModal',
    initialState:  projectsModalInitialState,
    reducers: {
        open(state) {
            state.isOpen = true;
        },
        close(state) {
            state.isOpen = false;
        },
        loadProjectData(state, action) {
            state.projectName = projectData[action.payload].projectName;
            state.projectDesc = projectData[action.payload].projectDesc;
            state.projectCodeLink = projectData[action.payload].projectCodeLink;
            state.projectTryItLink = projectData[action.payload].projectTryItLink;
            state.projectImages = projectData[action.payload].projectImages;
        }
    }
});

const projectImageFullViewInitialState = {
    isOpen: false,
    imageSource: '',
};

const projectImageFullViewSlice =  createSlice ({
    name: 'projectImageFullView',
    initialState: projectImageFullViewInitialState,
    reducers: {
        open(state) {
            state.isOpen = true;
        },
        close(state) {
            state.isOpen = false;
        },
        loadImage(state, action) {
            state.imageSource = action.payload;
        }
    }
});

export const projectsModalActions = projectsModalSlice.actions;
export const projectImageFullViewActions = projectImageFullViewSlice.actions;
export  {projectsModalSlice, projectImageFullViewSlice};