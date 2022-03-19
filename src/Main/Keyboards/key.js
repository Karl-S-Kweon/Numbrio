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
        width = '53.5px'
        // console.log(width)        
    }
    else {
        width = '80px';
    }
    // console.log("Key - render")
    return (
        <Button
            // size='small'
            // color={'black'}
            // variant='contained'
            onClick={sendKeyData}
            style={{
                maxWidth: `${width}`, //'55px',
                minWidth: '1%',
                width: '100vw',
                height: '6.5vh',
                // width: '1%', // `${width}vw`,
                backgroundColor: props.pointer[1],

                // Border Line
                borderStyle: 'solid',
                borderColor: 'darkgrey', // props.pointer[1],
                borderRadius: '8%',
                borderWidth: '1px',

                // 
                margin: '0px 0.5%',
                
                //
                pointerEvents: props.pointer[0],

                // animations
                // animationName: props.pointer[2],
                animationName: props.animation,
                /*animation-fill-mode: both;*/
                animationDuration: '0.1s',
                animationIterationCount: 'initial',

                zIndex: 1,

            }}
        >
            <div
                className="keyFont"
                // style={{
                //     width: '10vw',
                //     borderStyle: 'solid',
                //     borderColor: 'black', // props.pointer[1],
                //     borderRadius: '8%',
                //     borderWidth: '1px',
                // }}
            >
                {props.value}
            </div>
        </Button >
    )
};
export default Key;