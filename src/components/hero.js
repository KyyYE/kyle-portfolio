import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Open Sans, sans-serif",
    color: "#fff",
  },
  subtitle: {
    color: "#2196f3",
    textTransform: "uppercase",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",

  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (

    
    <Box className={classes.typedContainer}>
      <Typography className={classes.title} variant="h5">
        <Typed strings={["Kyle Kerr"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h7">
        <Typed
          strings={[
              "",
              "",
            "Full Stack Developer",
            "",
            "",
            "Thank you for visiting my Portfolio",
            "",
            "",
            
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default  Hero;