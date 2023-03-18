import FrontBodyM from "@/components/FrontBodyM";
import FrontBodyF from "@/components/FrontBodyF";
import BackBodyM from "@/components/BackBodyM";
import BackBodyF from "@/components/BackBodyF";

import {
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import { log } from "console";

const AllExercises = () => {
  const [selectedGender, setSelectedGender] = useState<String>("male");

  return (
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
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "700px",
          marginBottom: "4rem",
          backgroundColor: "#0a0722",
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
          <h2>EXPLORE EXERCISES</h2>
        </Box>
        <RadioGroup
          defaultValue={"male"}
          row
          onChange={(e) => {
            setSelectedGender(e.target.value);
          }}
        >
          <FormControlLabel
            value="male"
            control={
              <Radio
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
            }
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={
              <Radio
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
            }
            label="Female"
          />
        </RadioGroup>
        {selectedGender === "male" ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <FrontBodyM />
            <Box
              sx={{
                display: "flex",
                width: "18rem",
                alignItems: "center",
                alignSelf: "flex-end",
              }}
            >
              <BackBodyM />
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "18rem",
                alignItems: "center",
              }}
            >
              <FrontBodyF />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "18rem",
                alignItems: "center",
                alignSelf: "flex-end",
              }}
            >
              <BackBodyF />
            </Box>
          </Box>
        )}
      </Box>
      <NavBar />
    </Box>
  );
};

export default AllExercises;
