/*
Material Design
---------------
Material Design is a design framework developed by Google in 2014.
Material Design makes more liberal use of grid-based layouts, responsive animations and transitions,
padding, and depth effects such as lighting and shadows. You can investigate what Material Design is
all about here: https://material.io/ We’re going to implement Material Design in our client project
by using a library called Material-UI http://www.material-ui.com.
Material-UI is a set of react components that implement material design principles.
*/
import { createTheme } from '@material-ui/core/styles';
export default createTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        "common": {
            "black": "rgba(0, 0, 0, 1)", "white": "rgba(255, 255, 255, 1)"
        },
        "background": {
            "paper": "rgba(74, 74, 74, 1)", "default": "rgba(0, 0, 0, 1)"
        },
        "primary": {
            "light": "rgba(215, 215, 215, 0.61)", "main": "rgba(140, 140, 140, 0.43)", "dark": "rgba(74, 74, 74, 1)", "contrastText": "rgba(255, 255, 255, 1)"
        },
        "secondary": {
            "light": "rgba(255, 255, 255, 1)", "main": "rgba(155, 155, 155, 1)", "dark": "rgba(74, 74, 74, 1)", "contrastText": "#fff"
        },
        "error": {
            "light": "#e57373", "main": "rgba(208, 2, 27, 1)", "dark": "#d32f2f", "contrastText": "#fff"
        },
        "text": {
            "primary": "rgba(255, 255, 255, 1)", "secondary": "rgba(155, 155, 155, 1)", "disabled": "rgba(0, 0, 0, 1)", "hint": "rgba(80, 227, 194, 1)"
        }
    }
});