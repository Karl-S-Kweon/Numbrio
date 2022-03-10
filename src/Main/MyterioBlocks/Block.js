import '../../App.css';
import React from 'react';

const Block = (props) => {

    let zoom = {

    }
    
    return (
        // <div  className="divBox">{props.value}</div>
        <div
            style={{
                // box Control
                height: '60px',
                width: '60px',
                backgroundColor: 'white',
                
                // Border Line
                borderStyle: 'solid',
                borderColor: props.css[0],
                borderRadius: '50%',
                borderWidth: '2px',

                // 
                margin: '0px 7px',
                
                // animations
                animationName: props.css[1],
                /*animation-fill-mode: both;*/
                animationDuration: '0.1s',
                animationIterationCount: 'initial',
            }}
        >
            <div
                className="keyFont"
            // onClick={senKeyData}
            >
                {props.value}
            </div>
        </div>
    )
};
export default Block;