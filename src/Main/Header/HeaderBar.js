import '../../App.css';
import React from 'react';
import { Button, Avatar } from "@mui/material/";
import graph from './Asset/Graph.png'
import baseball from './Asset/Baseball.png'

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

                // border: 'solid 1px red',
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
                        minWidth: '0rem',
                        maxWidth: '3.3rem',
                        minHeight: '0rem',
                        maxHeight: '3rem',
                        width: '100%',
                        height: '100%',
                        // backgroundColor: 'white',
                        // border: '3px solid',
                        // borderRadius: '50%',
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                        // textAlign: 'center',
                        // paddingTop: '0.5rem',
                        marginBottom: '-4%',
                        // zIndex: -5,
                    }}

                >
                    <img
                        src={graph} width="100%" height="100%"
                    />
                </Button>

            </div>
            <div
                style={{
                    width: '50vw',
                    height: '100%',
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: 'center',
                    // border: 'solid 1px red',
                }}
            >
                <div
                    className='blockFont'

                    style={{
                        color: 'royalblue',
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: 'center',
                        // border: 'solid 1px red',
                    }}
                >Numbrio
                    {/* <div
                        style={{
                            height: '100%',
                            fontSize: '0.5rem',
                            color: 'indigo',
                            display: 'flex',
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            textAlign: 'flex-start',
                            border: 'solid 1px red',
                        }}
                    >
                        TM
                    </div> */}
                </div>
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
                    id="baseball"
                    style={{
                        minWidth: '0rem',
                        maxWidth: '2.5rem',
                        minHeight: '0rem',
                        maxHeight: '2.5rem',
                        width: '50%',
                        height: '100%',
                        // border: '1px solid red',
                        borderRadius: '50%',
                        // display: 'flex',
                        // justifyContent: "center",
                        // alignItems: "center",
                        // textAlign: 'center',

                        // zIndex: -5,
                    }}
                    startIcon={<Avatar
                        src={baseball}
                        style={{
                            // border: '1px solid blue',
                            // display: 'flex',
                            // justifyContent: "center",
                            // alignItems: "center",
                            // textAlign: 'center',
                            marginLeft: '15%'
                        }}
                    />}
                >
                    {/* <img
                        src={baseball} width="35vw" height="35vh"
                    /> */}
                </Button>
            </div>
        </div >
    )
};
export default HeaderBar;