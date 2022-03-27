import '../../App.css';
import React from 'react'; // useReducer 

const strikeBlock = (props) => {
    console.log(props.strike)
    return (
        <div
            className='blockFont'
            style={{
                height: '8vw',
                width: '8vw', // ${100/5}

                fontSize: '120%',
                // Border Line
                // border: 'solid black 1px',

                // 
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",

                // 
                padding: '0% ',
                margin: '0 0.2rem',
            }}
        >
            {props.strike}
        </div>
    )
}

export default strikeBlock;