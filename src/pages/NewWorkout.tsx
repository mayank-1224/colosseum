import { useEffect, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import NavBar from "@/components/NavBar";

const NewWorkout = () => {
  return (
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "700px",
          border: "1px solid red",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#4B6858",
            width: "100%",
            height: "5%",
            fontFamily: "Inter",
            letterSpacing: "0.15rem",
            color: "#FFFFFC",
            display: "flex",
            alignItems: "center",
            paddingLeft: "1rem",
          }}
        >
          <h2>CREATE NEW WORKOUT</h2>
        </Box>
      </Box>
      <NavBar />
    </Box>
  );
};

export default NewWorkout;
