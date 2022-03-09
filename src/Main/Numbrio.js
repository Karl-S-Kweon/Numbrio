import React, { useReducer } from 'react';

import '../App.css';
import Keyboards from './Keyboards/Keyboards';
import MysterioBlocks from './MyterioBlocks/MyterioBlocks';

// An example of a React Functional Component using JSX syntax
const Numbrio = () => {
    const initialState = {
        data: [],
    };

    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);

    const msgFromChild = (msg) => {
        // console.log("before pop: " + state.data)
        if (msg.toString().toLowerCase() === 'enter') {
            msg = ''
            return
        }
        if (msg.toString().toLowerCase() === 'del') {
            if (state.data.length !== 0) {
                state.data.pop()
            }
            msg = ''
        }
        else if (state.data.length < 4) {
            state.data.push(msg)
        }
        // console.log("After pop: " + state.data)
        setState({ data: state.data })
    };

    return <>
        <MysterioBlocks pushToChild={state.data} />
        <Keyboards getFromChild={msgFromChild} />
    </>;
};
export default Numbrio;