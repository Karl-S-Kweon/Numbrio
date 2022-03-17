import '../../App.css';
import React from 'react';
import { Button } from "@mui/material/";
const HeaderBar = (props) => {

    return (
        <div
            style={{
                width: '100vw',
                height: '100%',

                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: "center",
                textAlign: 'center',
                // zIndex: 'auto',

                // borderStyle: 'solid',
                // borderWidth: '1px',
                // borderColor: 'pink'
            }}
        >
            <div
                style={{
                    height: '100%',
                    width: '25vw',

                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: 'center',

                    // border: '1px pink solid',
                }}

            >
                <Button
                    style={{
                        width: '13vw',
                        height: '90%',
                        // backgroundColor: 'white',
                        // border: '3px solid',
                        // borderRadius: '50%',
                        // display: 'flex',
                        // justifyContent: "center",
                        // alignItems: "center",
                        // textAlign: 'center',

                        // 
                        // alignItems: "center",
                        // textAlign: 'center',
                        // alignSelf:'center'
                        // zIndex: -5,
                    }}
                >
                    <img
                        src="/asset/graph.png" width="35vw" height="35vw"
                    />
                </Button>

            </div>
            <div
                className="blockFont"
                style={{
                    width: '50vw',
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: 'center',
                }}
            >
                Numbrio
            </div>
            <div
                style={{
                    // box Control
                    height: '100%',
                    width: '25vw',
                    // border: '1px pink solid',

                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: 'center',
                }}
            >
                <Button
                    style={{
                        width: '13vw',
                        height: '90%',
                        backgroundColor: 'white',
                        // border: '3px solid',
                        borderRadius: '50%',
                        // display: 'flex',
                        // justifyContent: "center",
                        // alignItems: "center",
                        // textAlign: 'center',

                        // 
                        // alignItems: "center",
                        // textAlign: 'center',
                        // alignSelf:'center'
                        // zIndex: -5,
                    }}
                >
                    {/* <span
                        className="blockFont"
                        style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: 'white',
                            border: '3px royalblue solid',
                            borderRadius: '50%',

                            // Border Line
                            // border: '3px black solid',
                            // borderRadius: '50%', 
                            color: 'royalblue',
                            display: 'flex',
                            // justifyContent: "center",
                            // alignItems: "center",
                            // textAlign: 'center',
                        }}
                    >?</span> */}
                    <img
                        src="/asset/baseball.png" width="35vw" height="35vh"
                    />
                </Button>
            </div>
        </div >
    )
};
export default HeaderBar;