import Head from "next/head";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import bg from "../image/background.png";
import Router from "next/router";
import NavBar from "@/components/NavBar";

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
          minHeight: "100vh",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "95vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "700px",
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "5rem 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFC",
              fontFamily: "Montserrat",
              letterSpacing: "0.2rem",
              width: "100%",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "3rem",
                letterSpacing: "0.4rem",
              }}
            >
              COLOSSEUM
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: "1.5rem",
                letterSpacing: "0.4rem",
              }}
            >
              TRAIN LIKE A GOD!
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "70%",
            }}
          >
            <Button
              variant="contained"
              onClick={handleStartWorkout}
              sx={{
                borderRadius: "2rem",
                letterSpacing: "0.1rem",
                fontFamily: "Montserrat",
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
              onClick={() => Router.push("/Measurements")}
              sx={{
                borderRadius: "2rem",
                letterSpacing: "0.1rem",
                fontFamily: "Montserrat",
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
                borderRadius: "2rem",

                letterSpacing: "0.1rem",
                fontFamily: "Montserrat",
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
        <NavBar />
      </Box>
    </>
  );
}
