import "../../App.css";
import React, { useState, useReducer } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  List,
  Slide,
} from "@mui/material/";
import graph from "./Asset/Graph.png";
import baseball from "./Asset/Baseball.png";
import Block from "../MyterioBlocks/Block";
// import { css, jsx } from '@emotion/react'

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
      timeout={{ enter: 350, exit: 175 }}
    />
  ); // style={{ transitionDelay: '15s' }}
});

const HeaderBar = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);

  const [openGraph, setOpenGraph] = useState(false);
  const handleOpenGraphDialog = () => setOpenGraph(true);
  const handleCloseGraphDialog = () => setOpenGraph(false);

  const initialState = {
    gamePlayed: 3,
    kRate: 0,
    currentK: 0,
    maxK: 0,
    lost: 1,
    tried: 1,
  };

  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);

  let index = [0, 1, 2, 3];

  let blocks = (color, pos) =>
    index.map((idx) => (
      <Block
        style={{
          margin: "1% 0",
        }}
        _id={idx === pos ? "guideblock" : "none"}
        value={[1, 2, 3, 4][idx]}
        backgroundColor={idx === pos ? `${color}` : ""}
        borderColor={idx === pos ? `${color}` : "darkgrey"}
        key={idx}
      />
    ));

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        // zIndex: 'auto',

        // border: 'solid 1px red',
      }}
    >
      {/* Graph */}
      <div
        style={{
          height: "100%",
          width: "20vw",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",

          // border: '1px pink solid',
        }}
      >
        <Button
          style={{
            minWidth: "0rem",
            maxWidth: "3.3rem",
            minHeight: "0rem",
            maxHeight: "3rem",
            width: "100%",
            height: "100%",
            // backgroundColor: 'white',
            // border: '3px solid',
            // borderRadius: '50%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // textAlign: 'center',
            // paddingTop: '0.5rem',
            marginBottom: "-1%",
            // zIndex: -5,
          }}
          onClick={handleOpenGraphDialog}
        >
          <img
            src={graph}
            width="40px"
            height="40px"
            alt="graph for the game stats"
          />
        </Button>
      </div>
      {/* Logo - App Name */}
      <div
        style={{
          width: "60vw",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          // border: 'solid 1px red',
        }}
      >
        <div
          className="blockFont"
          style={{
            color: "royalblue",
            fontSize: "calc(15px + 1.5 vh)",
            fontSmooth: "always",
            fontStyle: "italic",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            // border: 'solid 1px red',
          }}
        >
          Numbrio
        </div>
      </div>
      {/* App Guide */}
      <div
        style={{
          // box Control
          height: "100%",
          width: "20vw",
          // border: '1px pink solid',

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Button
          onClick={handleOpenDialog}
          style={{
            minWidth: "0",
            maxWidth: "41px",
            minHeight: "0",
            maxHeight: "41px",
            width: "100%",
            height: "100%",
            // border: '1px solid red',
            borderRadius: "50%",
            // backgroundColor: 'black',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",

            // paddingTop:'0%',
            // zIndex: -5,
          }}
        >
          <img
            src={baseball}
            width="40px"
            height="40px"
            alt="baseball icon for how to play the game"
          />
          <div
            id="guidequestion"
            style={{
              position: "absolute",
              // zIndex: 2,
              // top: '1%',
              left: "37.5%",
              fontSize: "140%",
              fontWeight: "bold",
              color: "crimson",
              // transform: translate('-50 %', '-50 %'),
            }}
          >
            ?
          </div>
        </Button>
      </div>
      {/* DIALOG PART */}
      <Dialog
        // style={{
        //     width: '100vw',
        //     height: '100vh',
        //     overflow: 'hidden',
        //     // border: '5px solid blue',
        // }}
        TransitionComponent={Transition}
        fullScreen={true}
        open={open}
        onClose={handleCloseDialog}
      >
        <DialogTitle
          className="dialog"
          style={{
            height: "0.5vh",
            width: "100%",
            // color: 'black',
            // border: '1px solid blue',
            padding: "5% 0%",
            display: "flex",
            // flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
            // textAlign: 'center',

            borderBottom: "1px solid grey",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "22%",
              fontSize: "85%",
              fontWeight: "bold",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",

              // border: '1px solid blue',
              // margin: '0 0 0 -5%',
              paddingLeft: "11%",
            }}
          >
            How to Play
          </div>
          <Button
            style={{
              // maxWidth: '15vw',
              // minWidth: '1vw',
              // width: '0%',
              height: "300%",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              // border: '1px solid blue',

              fontSize: "85%",
              fontWeight: "bold",
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

            color: "black",

            display: "inline",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",

            // border: '1px solid blue',
          }}
        >
          <div
            style={{
              fontSize: "medium",
              justifyContent: "flex-start",
              textAlign: "left",
              padding: "5% 0",
              // margin: '0 0 0 -10%',
              // width: '115%',

              color: "black",

              borderBottom: "1px solid grey",
            }}
          >
            This app is a recreation of 'Cows and Bulls' <br />
            or 'Number Baseball'.
            <br />
            Hack a code of 4 digits in 5 tries.
          </div>
          <div
            style={{
              fontSize: "medium",
              justifyContent: "flex-start",
              textAlign: "left",
              padding: "3% 0",
              // margin: '0 0 0 -10%',
              // width: '90%',

              color: "black",

              // borderBottom: '1px solid grey'
            }}
          >
            <div>
              <b>Game Tips</b>
            </div>
            <List
              style={{
                // this box's width/height
                width: "88%",
                minHeight: "1vh",
                maxHeight: "50vh",
                height: "20%",

                // margin: '5% 0',

                // border line
                // border: 'solid pink 1px',

                // content alignment
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "1%",
              }}
            >
              {blocks("red", 0)}
            </List>
            <div
              style={{
                marginBottom: "3%",
                fontSize: "85%",
              }}
            >
              Strike! <b>1</b> is in the right place of the code.
            </div>
            <List
              style={{
                // this box's width/height
                width: "88%",
                minHeight: "1vh",
                maxHeight: "50vh",
                height: "20%",

                // margin: '5% 0',

                // border line
                // border: 'solid pink 1px',

                // content alignment
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "1%",
              }}
            >
              {blocks("green", 1)}
            </List>
            <div
              style={{
                marginBottom: "3%",
                fontSize: "85%",
              }}
            >
              Ball. <b>2</b> is in the code but in the wrong place.
            </div>
            <List
              style={{
                // this box's width/height
                width: "88%",
                minHeight: "1vh",
                maxHeight: "50vh",
                height: "20%",

                // margin: '5% 0',

                // border line
                // border: 'solid pink 1px',

                // content alignment
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "1%",
              }}
            >
              {blocks("darkgrey", 2)}
            </List>
            <div
              style={{
                marginBottom: "5%",
                fontSize: "85%",
              }}
            >
              Foul. <b>3</b> is not in the code.
            </div>
            <div
              style={{
                marginBottom: "5%",
                fontSize: "medium",
              }}
            >
              <b>Enjoy Hacking!</b>
            </div>
            <div
              style={{
                borderTop: "solid grey 1px",
                // borderRadius: '2%',

                height: "50vw",
                width: "100%",

                marginTop: "2%",
                paddingTop: "2%",

                fontSize: "medium",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                // alignContent: 'space-around',
                // alignItems: 'center'
              }}
            >
              <div>
                <b>Developer: Karl (aka Kweon Soonyeong)</b>
              </div>
              <div>
                <a href="https://karl-s-kweon.github.io/about/index.html">
                  About Developer
                </a>
              </div>
              <div>
                <a href="https://github.com/Karl-S-Kweon/Numbrio">
                  Numbrio Github
                </a>
              </div>
              <br />

              <div>Thanks to Wordle dev team!</div>
              <div>UI/UX inspired by Wordle</div>
              <div>
                <a href="https://www.nytimes.com/games/wordle/index.html">
                  Link to Wordle
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog
        // className='dialog'
        fullWidth={true}
        maxWidth={"xl"}
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          //   border: "2px solid blue",
        }}
        // fullScreen={true}
        open={openGraph}
        onClose={handleCloseGraphDialog}
      >
        <DialogTitle
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            // border: "1px solid blue",
            marginBottom: "1vh",
          }}
        >
          <DialogContentText
            style={{
              width: "90%",
              height: "5vh",
              //   overflow: "hidden",
              marginLeft: "10%",
              paddingLeft: "10%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              //   border: "1px solid blue",
              fontSize: "3vh",
              fontWeight: "bold",
            }}
          >
            Play Stats
          </DialogContentText>
          <Button
            style={{
              left: "3%",
              width: "25%",
              height: "60%",
              //   overflow: "hidden",
              Right: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              // border: "1px solid blue",
              fontSize: "2.5vh",
              fontWeight: "bold",
            }}
          >
            X
          </Button>
        </DialogTitle>
        <DialogContent
          style={{
            color: "black",
            // width: "38vh",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <DialogContentText
            style={{
              width: "25%",
              height: "3vh",
              //   border: "1px solid blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.8vh",
            }}
          >
            9999
          </DialogContentText>
          <DialogContentText
            style={{
              width: "25%",
              height: "3vh",
              //   border: "1px solid blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.8vh",
            }}
          >
            100
            <span
              style={{
                fontSize: "50%",
              }}
            >
              %
            </span>
          </DialogContentText>
          <DialogContentText
            style={{
              width: "25%",
              height: "3vh",
              //   border: "1px solid blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.8vh",
            }}
          >
            9999
            <span
              style={{
                fontSize: "75%",
                fontWeight: "bold",
              }}
            >
              K
            </span>
          </DialogContentText>
          <DialogContentText
            style={{
              width: "25%",
              height: "3vh",
              //   border: "1px solid blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.8vh",
            }}
          >
            9999
            <span
              style={{
                fontSize: "75%",
                fontWeight: "bold",
              }}
            >
              K
            </span>
          </DialogContentText>
          <DialogContentText
            style={{
              width: "25%",
              height: "3vh",
              //   border: "1px solid blue",
              display: "flex",
              justifyContent: "center",
              //   alignItems: "center",
            }}
          >
            Game{state.gamePlayed > 1 ? "s" : ""}
          </DialogContentText>
          <DialogContentText
            style={{
              width: "25%",
              height: "3vh",
              //   border: "1px solid blue",
              display: "flex",
              justifyContent: "center",
              //   alignItems: "center",
            }}
          >
            K Rate
          </DialogContentText>
          <DialogContentText
            style={{
              width: "25%",
              height: "3vh",
              //   border: "1px solid blue",
              display: "flex",
              justifyContent: "center",
              //   alignItems: "center",
            }}
          >
            Current
          </DialogContentText>
          <DialogContentText
            style={{
              width: "25%",
              height: "3vh",
              //   border: "1px solid blue",
              display: "flex",
              justifyContent: "center",
              //   alignItems: "center",
            }}
          >
            Max
          </DialogContentText>
        </DialogContent>
        <DialogContent
          style={{
            color: "black",
            // width: "38vh",
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <DialogContentText>Strikeout Distribution</DialogContentText>
          <div // graph div ==> change functional components (bar text too)
            style={{
              height: "15vh",
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              alignItems: "flex-end",
              textAlign: "center",
              borderBottom: "1px solid blue",
            }}
          >
            <div // bars
              style={{
                backgroundColor: "dimgrey",
                width: "4vw",
                height: `${100/(state.gamePlayed - state.lost) * state.tried}%`,
                maxHeight: "15vh",
                minHeight: "1vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                alignItems: `flex-end`,
                margin: "0px 1vw",
                // fontWeight: 'bold',
                color: 'white',
              }}
            >
              0
            </div>
            <div // bars
              style={{
                backgroundColor: "dimgrey",
                width: "4vw",
                height: "30%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            ></div>
            <div // bars
              style={{
                backgroundColor: "dimgrey",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                //   alignItems: "center",
                margin: "0px 1vw",
              }}
            ></div>
            <div // bars
              style={{
                backgroundColor: "dimgrey",
                width: "4vw",
                height: "30%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            ></div>
            <div // bars
              style={{
                backgroundColor: "dimgrey",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                //   alignItems: "center",
                margin: "0px 1vw",
              }}
            ></div>
            <div // bars
              style={{
                backgroundColor: "dimgrey",
                width: "4vw",
                height: "30%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            ></div>
            <div // bars
              style={{
                backgroundColor: "dimgrey",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                //   alignItems: "center",
                margin: "0px 1vw",
              }}
            ></div>
            <div // bars
              style={{
                backgroundColor: "dimgrey",
                width: "4vw",
                height: "30%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            ></div>
            <div // bars
              style={{
                backgroundColor: "dimgrey",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                //   alignItems: "center",
                margin: "0px 1vw",
              }}
            ></div>
            <div // bars
              style={{
                backgroundColor: "dimgrey",
                width: "4vw",
                height: "30%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            ></div>
          </div>
          <div // Bar Text
            style={{
              height: "2.5vh",
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              //   border: "1px solid blue",
            }}
          >
            <DialogContentText
              //   id='DialogContentText'
              style={{
                // backgroundColor: "black",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            >
              1
            </DialogContentText>
            <DialogContentText
              className="statColumnNumber"
              style={{
                // backgroundColor: "black",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                //   border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            >
              2
            </DialogContentText>
            <DialogContentText
              style={{
                // backgroundColor: "black",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            >
              3
            </DialogContentText>
            <DialogContentText
              style={{
                // backgroundColor: "black",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            >
              4
            </DialogContentText>
            <DialogContentText
              style={{
                // backgroundColor: "black",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            >
              5
            </DialogContentText>
            <DialogContentText
              style={{
                // backgroundColor: "black",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            >
              6
            </DialogContentText>
            <DialogContentText
              style={{
                // backgroundColor: "black",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            >
              7
            </DialogContentText>
            <DialogContentText
              style={{
                // backgroundColor: "black",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            >
              8
            </DialogContentText>
            <DialogContentText
              style={{
                // backgroundColor: "black",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            >
              9
            </DialogContentText>
            <DialogContentText
              style={{
                // backgroundColor: "black",
                width: "4vw",
                height: "10%",
                maxHeight: "20vh",
                minHeight: "2vh",
                // border: "1px solid blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px 1vw",
              }}
            >
              10
            </DialogContentText>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default HeaderBar;
