import '../../App.css';
import React, { useEffect } from 'react';

const Block = (props) => {

    useEffect(() => {
        // sendKeyData()
    })

    const sendKeyData = () => {
        // props.fromChild('');
    };

    return (
        <div
            style={{
                // box Control
                height: '16.8vw',
                width: '16.8vw', // ${100/5}

                // Border Line
                // border: 'solid black 1px',
                
                // 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                // 
                padding: '0%',
                margin: '0 0.2rem',

                // zIndex: 11,
            }}
        >
            <div
                id={props._id}

                style={{
                    // box Control
                    height: '90%',
                    width: '90%',
                    backgroundColor: props.backgroundColor,

                    // Border Line
                    borderStyle: 'solid',
                    borderColor: props.borderColor, // css[0],
                    borderRadius: '50%',
                    borderWidth: '2px',

                    // 
                    // padding: '0%',
                    // margin: '0.5%',
                    
                    // animations
                    animationName: props.animation, //css[1],
                    /*animation-fill-mode: both;*/
                    animationDuration: (props._id === 'guideblock' ? '1s' : '0.1s'),
                    animationIterationCount: 'initial',
                    // animationDelay: (props._id === 'guideblock' ? '0.5s' : '0.1'),
                }}
            >
                <div
                    className="blockFont"
                    style={{
                        display: 'flex',
                        // animations
                        animationName: props.animation, //css[1],
                        animationDuration: (props._id === 'guideblock' ? '1s' : '0.1s'),
                        animationIterationCount: 'initial',
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