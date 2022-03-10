import '../../App.css';
import React, { useReducer } from 'react';
import { List } from "@material-ui/core";
import BlockRow from './BlockRow'

const MysterioBox = (props) => {
    const initialState = {
        data: "",
        blockState: {
            backgroundColor: 'silver',
        }
    };

    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);

    const msgFromChild = (msg) => {
        console.log(props.data);
        setState({ data: msg });
    };

    let index = [0, 1, 2, 3, 4, 5, 6];
    let row = 0
    
    let BlockRows = index.map((idx) => ( idx === row ? 
        (<BlockRow value={props.pushToChild[0]} key={idx} row={row} />) :
        (<BlockRow value={[]} key={idx} row={row} />)
    ));
    
    return (
        <div
            style={{
                // box size & space control
                width: '100vw',
                height: '70vh',
                left: '50%',
                top: '45%',
                position: 'absolute',
                marginTop: '-35vh', // half of height
                marginLeft: '-50vw', // half of width
                padding: '0px 0px',

                // content alignment
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",

                // Border Line
                // border: "solid",
                // borderColor: 'red',
                // borderWidth: '1px',
            }}
        >
            <List
                style={{
                    // this box's width/height
                    width: '99vw',
                    height: '97%',

                    // border line
                    // borderStyle: 'solid',
                    // borderColor: 'blue',
                    // borderWidth: '1px',

                    // content alignment
                    display: "inline-block",
                    justifyContent: "center",
                    alignItems: "center",

                    // box space control
                    // padding: '0px',
                    margin: '1px'
                }}
            >
                {BlockRows}
            </List>
        </div>
    )
};
export default MysterioBox;