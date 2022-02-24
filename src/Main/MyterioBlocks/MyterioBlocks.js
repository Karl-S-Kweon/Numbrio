import '../../App.css';
import React, { useReducer } from 'react';
import BlockRow from './BlockRow'

const MysterioBox = (props) => {
    const initialState = {
        data: "",
    };

    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);

    const msgFromChild = (msg) => {
        console.log(props.data);
        setState({ data: msg });
    };

    return (
        <div
            style={{
                // box size & space control
                width: '100vw',
                height: '54vh',
                left: '50%',
                top: '36%',
                position: 'absolute',
                marginTop: '-10vh', // half of height
                marginLeft: '-50vw', // half of width
                padding: '0px 0px',

                // content alignment
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",

                // Border Line
                border: "solid",
                borderColor: 'silver',
                borderWidth: '1px',
            }}
        >
            <BlockRow value={props.pushToChild} />

        </div>
    )
};
export default MysterioBox;