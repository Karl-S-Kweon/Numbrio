import React, { useReducer } from 'react';

import '../App.css';
import Keyboards from './Keyboards/Keyboards';
import MysterioBlocks from './MyterioBlocks/MyterioBlocks';

// An example of a React Functional Component using JSX syntax
const Numbrio = () => {
    const initialState = {
        data: [
            [],
            []
        ],
    };

    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);

    const msgFromChild = (msg) => {
        // console.log("before pop: " + state.data)
        if (msg.toString() === 'Enter') {
            state.data[1]=[];
            state.data[1]=(msg);
            msg =''
            return
        }
        if (msg.toString() === 'Del') {
            state.data[1]=[];
            state.data[1]=(msg);
            msg = ''

            if (state.data.length !== 0) {
                state.data[0].pop()
            }
        }
        else if (state.data[0].length < 4) {
            state.data[1] = []
            state.data[0].push(msg)
        }
        // console.log("After pop: " + state.data)
        setState({ data: state.data })
    };
    // console.log(state.data)
    // send keyboards the input array, to prevent selecting duplicate key value
    return <>

        <MysterioBlocks pushToChild={state.data} />
        <Keyboards pushToChild={state.data} getFromChild={msgFromChild} />
    </>;
};
export default Numbrio;