import '../../App.css';
import React, { useEffect } from 'react';

const Block = (props) => {

    useEffect(() => {
        // sendKeyData()
    })

    const sendKeyData = () => {
        props.fromChild('');
    };

    return (
        <div
            style={{
                // box Control
                height: '18.5vw',
                width: '18.5vw', // ${100/5}
                // backgroundColor: 'white',

                // Border Line
                // borderStyle: 'solid',
                // borderColor: 'black',
                // borderWidth: '1px',
                // borderRadius: '50%',

                //
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                // 
                margin: '-0.1rem',

                // animations
                animationName: props.css[1],
                /*animation-fill-mode: both;*/
                animationDuration: '0.1s',
                animationIterationCount: 'initial',
            }}
        >
            <div
                style={{
                    // box Control
                    height: '72.5%',
                    width: '72.5%',
                    backgroundColor: 'white',

                    // Border Line
                    borderStyle: 'solid',
                    borderColor: props.css[0],
                    borderRadius: '50%',
                    borderWidth: '2px',

                    // 
                    // margin: '0px 0.5rem',

                    // animations
                    animationName: props.css[1],
                    /*animation-fill-mode: both;*/
                    animationDuration: '0.1s',
                    animationIterationCount: 'initial',
                }}
            >
                <div
                    className="blockFont"
                    style={{
                        display: 'flex',
                        // animations
                        animationName: props.css[1],

                    }}

                // onClick={senKeyData}
                >
                    {props.value}
                </div>
            </div>
        </div>
    )
};
export default Block;