import { Box, Button } from "@mui/material";
import React from "react";
import NavBar from "@/components/NavBar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const WeightMetrics = [
  {
    value: "kg",
    label: "kg",
  },
  {
    value: "lbs",
    label: "lbs",
  },
];

const HeightMetrics = [
  {
    value: "cm",
    label: "cm",
  },
  {
    value: "ft",
    label: "ft",
  },
];

const Measurements = () => {
  const [weightSelect, setWeightSelect] = React.useState("kg");
  const [heightSelect, setHeightSelect] = React.useState("cm");

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
          marginBottom: "5rem",
          backgroundColor: "#FFFFFC",
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
          <h2>BODY FITNESS</h2>
        </Box>
        <Box
          sx={{
            border: "1px solid red",
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            color: "#4B6858",
          }}
        >
          <Box>
            <h2>Height</h2>
            <TextField
              select
              label="Metric"
              defaultValue="cm"
              onChange={(event) => setHeightSelect(event.target.value)}
            >
              {HeightMetrics.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {heightSelect === "cm" ? (
              <TextField required id="outlined-required" label="Required" />
            ) : (
              <>
                <TextField required id="outlined-required" label="Feet" />
                <TextField required id="outlined-required" label="Inches" />
              </>
            )}
          </Box>
          <Box>
            <h2>Weight</h2>
            <TextField
              select
              label="Metric"
              defaultValue="kg"
              onChange={(event) => setWeightSelect(event.target.value)}
            >
              {WeightMetrics.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField required id="outlined-required" label="Required" />
          </Box>
        </Box>
        <Button>
          <h2>Save</h2>
        </Button>
      </Box>
      <NavBar />
    </Box>
  );
};

export default Measurements;
