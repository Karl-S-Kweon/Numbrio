import '../../App.css';
import React, { useState } from 'react';
import { Button, Avatar, Dialog, DialogTitle, DialogContent, DialogFooter, DialogContentText, List } from "@mui/material/";
import graph from './Asset/Graph.png'
import baseball from './Asset/Baseball.png'
import Block from '../MyterioBlocks/Block'
import { textAlign } from '@mui/system';

const HeaderBar = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpenDialog = () => setOpen(true);
    const handleCloseDialog = () => setOpen(false);

    const [openGraph, setOpenGraph] = useState(false);
    const handleOpenGraphDialog = () => setOpenGraph(true);
    const handleCloseGraphDialog = () => setOpenGraph(false);

    let index = [0, 1, 2, 3]

    let blocks = (color, pos) => index.map((idx) => (
        <Block
            style={{
                margin: '1% 0'
            }}
            _id={idx === pos ? 'guideblock' : ''}
            value={[1, 2, 3, 4][idx]}
            backgroundColor={idx === pos ? `${color}` : ''}
            borderColor={idx === pos ? `${color}` : 'darkgrey'}
            key={idx}
        />
    ));

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
                    onClick={handleOpenGraphDialog}
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
                    onClick={handleOpenDialog}
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

            {/* DIALOG PART */}

            <Dialog
                className='dialog'
                style={{
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                    // border: '5px solid blue',
                }}
                fullScreen={true}
                open={open}
                onClose={handleCloseDialog}
            >
                <DialogTitle
                    className='dialog'
                    style={{
                        height: '1.5vh',
                        width: '100%',
                        // color: 'black',
                        // border: '1px solid blue',
                        padding: '5% 0%',
                        display: 'flex',
                        // flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        // textAlign: 'center',

                        // borderBottom: '1px solid grey'
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            height: '225%',
                            fontSize: '85%',
                            fontWeight: 'bold',

                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',

                            // border: '1px solid blue',
                            // margin: '0 0 0 -5%',
                            paddingLeft: '11%',
                        }}
                    >
                        How to Play
                    </div >
                    <Button
                        style={{
                            // maxWidth: '15vw',
                            // minWidth: '1vw',
                            // width: '0%',
                            height: '300%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: "center",
                            // border: '1px solid blue',

                            fontSize: '85%',
                            fontWeight: 'bold',
                            // marginLeft: '1%',
                        }}
                        onClick={handleCloseDialog}
                    >
                        X
                    </Button>

                </DialogTitle>
                <DialogContent
                    style={{
                        // height: '65vh',
                        // width: 'inherit',

                        color: 'black',

                        display: 'inline',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: "center",

                        // border: '1px solid blue',
                    }}
                >
                    <DialogContentText
                        sx={{
                            fontSize: 'medium',
                            justifyContent: 'flex-start',
                            textAlign: 'left',
                            padding: '5% 0',
                            // margin: '0 0 0 -10%',
                            // width: '115%',

                            color: 'black',

                            // borderBottom: '1px solid grey'
                        }}
                    >
                        'Cows and Bulls' or 'Number Baseball'.<br />
                        Hack a code of 4 digits in 5 tries.
                    </DialogContentText >
                    <DialogContentText
                        style={{
                            fontSize: 'medium',
                            justifyContent: 'flex-start',
                            textAlign: 'left',
                            padding: '5% 0',
                            // margin: '0 0 0 -10%',
                            // width: '90%',

                            color: 'black',

                            // borderBottom: '1px solid grey'
                        }}
                    >
                        <div>
                            <b>Game Tips</b>
                        </div>
                        <List
                            style={{
                                // this box's width/height
                                width: '75%',
                                minHeight: '1vh',
                                maxHeight: '50vh',
                                height: '20%',

                                // margin: '5% 0',

                                // border line
                                // border: 'solid pink 1px',

                                // content alignment
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                textAlign: "center",
                                marginBottom: '1%',
                            }}
                        >
                            {blocks('red', 0)}
                        </List>
                        <div
                            style={{
                                marginBottom: '3%',
                                fontSize: '85%',
                            }}
                        >
                            Strike! The number <b>1</b> is in the code and in the right place.
                        </div>
                        <List
                            style={{
                                // this box's width/height
                                width: '75%',
                                minHeight: '1vh',
                                maxHeight: '50vh',
                                height: '20%',

                                // margin: '5% 0',

                                // border line
                                // border: 'solid pink 1px',

                                // content alignment
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                textAlign: "center",
                                marginBottom: '1%',
                            }}
                        >
                            {blocks('green', 1)}
                        </List>
                        <div
                            style={{
                                marginBottom: '3%',
                                fontSize: '85%',
                            }}
                        >
                            Ball! The number <b>2</b> is in the code but in the wrong place.
                        </div>
                        <List
                            style={{
                                // this box's width/height
                                width: '75%',
                                minHeight: '1vh',
                                maxHeight: '50vh',
                                height: '20%',

                                // margin: '5% 0',

                                // border line
                                // border: 'solid pink 1px',

                                // content alignment
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                textAlign: "center",
                                marginBottom: '1%',
                            }}
                        >
                            {blocks('darkgrey', 2)}
                        </List>
                        <div
                            style={{
                                marginBottom: '3%',
                                fontSize: '85%',
                            }}
                        >
                            Oh... The number <b>3</b> is not in the code.
                        </div>
                        <div
                            style={{
                                margin: '10% 0',
                                fontSize: 'medium',
                            }}
                        >
                            <b>Enjoy Hacking!</b>
                        </div>
                        <div
                            style={{
                                borderTop: 'solid darkgrey 1px',
                                // borderRadius: '2%',

                                height: '40vw',
                                width: '100%',

                                marginTop: '0%',
                                // paddingLeft: '2%',

                                fontSize: 'medium',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                // alignContent: 'space-around',
                                // alignItems: 'center'

                            }}
                        >
                            <div><b>Developer: Karl (A.K.A. Kweon Soonyeong)</b></div>
                            <div><b><a href="https://www.nytimes.com/games/wordle/index.html">Numbrio Github</a></b></div>
                            <div><b>Thanks to Wordle dev team!</b></div>
                            <div><b>UI/UX inspired by Wordle</b></div>
                            <div><b><a href="https://www.nytimes.com/games/wordle/index.html">Link to Wordle</a></b></div>
                        </div>
                    </DialogContentText >
                </DialogContent>
            </Dialog>
            <Dialog
                // className='dialog'
                style={{
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                    // border: '5px solid blue',
                }}
                // fullScreen={true}
                open={openGraph}
                onClose={handleCloseGraphDialog}
            >
                Upcoming Soon!
            </Dialog>
        </div >
    )
};
export default HeaderBar