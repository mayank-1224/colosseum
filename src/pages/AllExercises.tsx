import FrontBodyMale from "@/components/FrontBodyMale";
import FrontBodyFemale from "@/components/FrontBodyFemale";
import BackBodyMale from "@/components/BackBodyMale";
import BackBodyFemale from "@/components/BackBodyFemale";

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
  const [selectedView, setSelectedView] = useState<String>("front");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        overflowY: "auto",
        backgroundColor: "#0a0722",
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
            backgroundColor: "#7393b3",
            width: "100%",
            height: "3.5rem",
            display: "flex",
            alignItems: "center",
            padding: "0.5rem",
            borderRadius: "0 0 2rem 0rem",
            marginBottom: "1rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              letterSpacing: "0.1rem",
              color: "white",
              textShadow: "0.2rem 0.2rem 0.5rem #000",
            }}
          >
            ALL EXERCISES
          </h2>
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
            sx={{
              "& .MuiFormControlLabel-label": {
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "1rem",
              },
            }}
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
            sx={{
              "& .MuiFormControlLabel-label": {
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "1rem",
              },
            }}
          />
        </RadioGroup>
        <RadioGroup
          defaultValue={"front"}
          row
          onChange={(e) => {
            setSelectedView(e.target.value);
          }}
        >
          <FormControlLabel
            value="front"
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
            label="Front"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "1rem",
              },
            }}
          />
          <FormControlLabel
            value="rear"
            control={
              <Radio
                sx={{
                  fontFamily: "Montserrat",
                  color: "white",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
            }
            label="Rear"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "1rem",
              },
            }}
          />
        </RadioGroup>
        <Typography
          sx={{
            color: "white",
            fontFamily: "Montserrat",
            fontSize: "1.1rem",
            fontWeight: "500",
            margin: "0.5rem 0.2rem",
          }}
        >
          Select a body part to view more information
        </Typography>
        {selectedGender === "male" ? (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            {selectedView === "front" ? <FrontBodyMale /> : <BackBodyMale />}
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            {selectedView === "front" ? (
              <FrontBodyFemale />
            ) : (
              <BackBodyFemale />
            )}
          </Box>
        )}
      </Box>
      <NavBar />
    </Box>
  );
};

export default AllExercises;
