import Head from "next/head";
import { Box, Button } from "@mui/material";
import bg from "../image/main_bg.jpg";
import Router from "next/router";

export default function Home() {
  const handleStartWorkout = () => {
    if (!localStorage.getItem("workout")) {
      localStorage.setItem("workout", JSON.stringify([]));
    }
    Router.push("/Workouts");
  };

  return (
    <>
      <Head>
        <title>Colosseum</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            backgroundColor: "#060009",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${bg.src})`,
              width: "100%",
              height: "58%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFC",
              fontFamily: "Inter",
              letterSpacing: "0.2rem",
            }}
          >
            <h1>COLOSSEUM</h1>
            <h2>TRAIN LIKE A GOD!</h2>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={handleStartWorkout}
              sx={{
                letterSpacing: "0.15rem",
                fontFamily: "Inter",
                backgroundColor: "#4F345A",
                color: "#FFFFFC",
                margin: "10px 5px",
                ":hover": {
                  backgroundColor: "#E5446D",
                },
              }}
            >
              Start Workout
            </Button>
            <Button
              variant="contained"
              sx={{
                letterSpacing: "0.15rem",
                fontFamily: "Inter",
                backgroundColor: "#4F345A",
                margin: "10px 5px",
                color: "#FFFFFC",
                ":hover": {
                  backgroundColor: "#E5446D",
                },
              }}
            >
              Update Measurements
            </Button>
            <Button
              variant="contained"
              sx={{
                letterSpacing: "0.15rem",
                fontFamily: "Inter",
                backgroundColor: "#4F345A",
                margin: "10px 5px",
                color: "#FFFFFC",
                ":hover": {
                  backgroundColor: "#E5446D",
                },
              }}
            >
              Explore Exercises
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid #4F345A",
            backgroundColor: "#BEB7A4",
            color: "black",
          }}
        >
          THIS IS THE FOOTER
        </Box>
      </Box>
    </>
  );
}
