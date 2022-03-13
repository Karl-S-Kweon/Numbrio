import '../../App.css';
import React from 'react';

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
        width = 82 / props.length
        // console.log(width)        
    }
    else {
        width = 22;
    }
    // console.log("Key - render")
    return (
        <div
            style={{
                height: '100%',
                width: `${width}vw`,
                backgroundColor: props.pointer[1],

                 // Border Line
                 borderStyle: 'groove',
                 borderColor: 'black',
                 borderRadius: '7%',
                 borderWidth: '1px',

                // 
                margin: '1px 2px',

                //
                pointerEvents: props.pointer[0],

                // animations
                // animationName: props.pointer[2],
                animationName: props.animation,
                /*animation-fill-mode: both;*/
                animationDuration: '0.08s',
                animationIterationCount: 'initial',
            }}
        // onClick={senKeyData}

        >
            <button
                style={{
                    backgroundColor: props.pointer[1],
                    // Border Line
                    // borderStyle: 'solid',
                    // borderRadius: '7%',
                    // borderWidth: '0px',
                }}
                className="keyFont"
                onClick={sendKeyData}
            >
                {props.value}
            </button>
            {/* {props.value} */}
        </div>
    )
};
export default Key;