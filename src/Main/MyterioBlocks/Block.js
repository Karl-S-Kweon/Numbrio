import '../../App.css';
import React from 'react';

const Block = (props) => {
    return (
        // <div  className="divBox">{props.value}</div>
        <div
            style={{
                // box Control
                height: '50px',
                width: '50px',
                backgroundColor: 'black',
                
                // Border Line
                borderStyle: 'solid',
                borderColor: 'silver',
                borderRadius: '50%',
                borderWidth: '1px',

                // 
                margin: '0px 3px'               
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