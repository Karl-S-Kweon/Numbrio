import '../../App.css';
import React from 'react';
// import { Button, Box } from "@material-ui/core";
import { Button } from '@mui/material/';
const Key = (props) => {

    const sendKeyData = () => {
        // console.log("key, sendKeyData")
        // console.log(props.value)        
        props.getFromChild([props.value, '']);
    };

    // dynamic style values
    var width;
    // console.log(props.length)
    if (typeof (props.value) === typeof (1)) {
        width = '50px'
        // console.log(width)        
    }
    else {
        width = '75px';
    }
    // console.log("Key - render")
    return (
        <Button
            size='small'
            // color={'black'}
            variant='contained'
            onClick={sendKeyData}
            style={{
                maxWidth: `${width}`, //'55px',
                minWidth: '5%',
                width: '60%',
                height: '90%',
                // width: '1%', // `${width}vw`,
                backgroundColor: props.pointer[1],

                // Border Line
                borderStyle: 'solid',
                borderColor: 'darkgrey', // props.pointer[1],
                borderRadius: '8%',
                borderWidth: '1px',
                
                // 
                margin: '0px 2px',

                //
                pointerEvents: props.pointer[0],

                // animations
                // animationName: props.pointer[2],
                animationName: props.animation,
                /*animation-fill-mode: both;*/
                animationDuration: '0.2s',
                animationIterationCount: 'initial',

            }}
        >
            <div className="keyFont">
                {props.value}
            </div>
        </Button >
        // <div
        //     sx={{
        //         border: 1,
        //         borderColor: 'grey',
        //     }}
        //     style={{
        //         height: '100%',
        //         width: '4rem', // `${width}vw`,
        //         backgroundColor: props.pointer[1],

        //         // Border Line
        //         borderStyle: 'solid',
        //         borderColor: 'dimgrey', // props.pointer[1],
        //         borderRadius: '9%',
        //         borderWidth: '1px',

        //         // 
        //         margin: '0px 3px',

        //         //
        //         pointerEvents: props.pointer[0],

        //         // animations
        //         // animationName: props.pointer[2],
        //         animationName: props.animation,
        //         /*animation-fill-mode: both;*/
        //         animationDuration: '0.2s',
        //         animationIterationCount: 'initial',

        //     }}
        // >
        //     <Button
        //         onClick={sendKeyData}
        //     >
        //         <div className="keyFont"> 
        //             {props.value}
        //         </div>
        //     </Button>
        // </div>
        // <div
        //     style={{
        //         height: '100%',
        //         width: '100%', // `${width}vw`,
        //         // backgroundColor: props.pointer[1],

        //          // Border Line
        //         //  borderStyle: 'solid',
        //         //  borderColor: props.pointer[1],
        //         //  borderRadius: '8%',
        //         //  borderWidth: '1px',

        //         // 
        //         margin: '0px 0px',

        //         //
        //         pointerEvents: props.pointer[0],

        //         // animations
        //         // animationName: props.pointer[2],
        //         animationName: props.animation,
        //         /*animation-fill-mode: both;*/
        //         animationDuration: '0.2s',
        //         animationIterationCount: 'initial',
        //     }}
        // // onClick={senKeyData}

        // >
        //     <Button
        //         style={{
        //             backgroundColor: props.pointer[1],

        //             // Border Line
        //             borderStyle: 'solid',
        //             borderRadius: '7%',
        //             borderWidth: '1px',
        //             borderColor: 'yellow',
        //         }}
        //         className="keyFont"
        //         onClick={sendKeyData}
        //     >
        //         {props.value}
        //     </Button>
        //     {/* {props.value} */}
        // </div>
    )
};
export default Key;