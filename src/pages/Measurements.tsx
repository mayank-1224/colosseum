import { Box, Button, InputAdornment, OutlinedInput } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ReactSpeedometer, {
  CustomSegmentLabelPosition,
  Transition,
} from "react-d3-speedometer";
import Typography from "@mui/material/Typography";

const Measurements = () => {
  const [userStats, setUserStats] = useState<any>();
  const [heightFT, setHeightFT] = useState<any>();
  const [heightIN, setHeightIN] = useState<any>();
  const [weight, setWeight] = useState<any>();
  const [bmi, setBmi] = useState<any>();

  // setUserStats(JSON.parse(localStorage.getItem("userStats")!));

  useEffect(() => {
    const userStatsTEMP = JSON.parse(localStorage.getItem("userStats")!);
    setUserStats(userStatsTEMP);

    // setHeightFT(userStats.heightFT);
    // setHeightIN(userStats.heightIN);
    // setWeight(userStats.weight);
    // setBmi(userStats.bmi);
  }, []);
  console.log(userStats);

  const handleUpdate = () => {
    if (heightFT) {
      userStats.heightFT = heightFT;
    }
    if (heightIN) {
      userStats.heightIN = heightIN;
    }
    if (weight) {
      userStats.weight = weight;
    }
    var BMI =
      703 *
      ((userStats.weight * 2.20462) /
        ((userStats.heightFT * 12 + userStats.heightIN) *
          (userStats.heightFT * 12 + userStats.heightIN)));
    BMI = Math.round(BMI * 100) / 100;

    var newStats = {
      ...userStats,
      bmi: BMI,
    };
    localStorage.setItem("userStats", JSON.stringify(newStats));
    setUserStats(newStats);
  };

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
          <h2>BODY FITNESS</h2>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#4B6858",
          }}
        >
          <Box>
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  margin: "1rem 0.2rem",
                }}
              >
                Current Height: {userStats?.heightFT}ft {userStats?.heightIN}in
              </Typography>
              <OutlinedInput
                endAdornment={
                  <InputAdornment
                    position="end"
                    sx={{
                      "& .css-1pnmrwp-MuiTypography-root": {
                        color: "white",
                      },
                    }}
                  >
                    ft
                  </InputAdornment>
                }
                onChange={(e) => {
                  setHeightFT(parseInt(e.target.value));
                }}
                sx={{
                  border: "1px solid white",
                  borderRadius: "1rem 0 0 1rem",
                  width: "8rem",
                  margin: "0rem 1rem 1rem 0.2rem",
                  "& .MuiInputBase-input": {
                    fontSize: "1.2rem",
                    color: "white",
                    fontFamily: "Montserrat",
                    letterSpacing: "0.1rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  },
                }}
              />
              <OutlinedInput
                endAdornment={
                  <InputAdornment
                    position="end"
                    sx={{
                      "& .css-1pnmrwp-MuiTypography-root": {
                        color: "white",
                      },
                    }}
                  >
                    in
                  </InputAdornment>
                }
                onChange={(e) => {
                  setHeightIN(parseInt(e.target.value));
                }}
                sx={{
                  width: "8rem",
                  border: "1px solid white",
                  borderRadius: "0 1rem 1rem 0",
                  "& .MuiInputBase-input": {
                    fontSize: "1.2rem",
                    color: "white",
                    fontFamily: "Montserrat",
                    letterSpacing: "0.1rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  },
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  margin: "0rem 0.2rem 1rem 0.2rem",
                }}
              >
                {" "}
                Current Weight: {userStats?.weight}kg
              </Typography>
              <OutlinedInput
                endAdornment={
                  <InputAdornment
                    position="end"
                    sx={{
                      "& .css-1pnmrwp-MuiTypography-root": {
                        color: "white",
                      },
                    }}
                  >
                    kg
                  </InputAdornment>
                }
                onChange={(e) => {
                  setWeight(parseInt(e.target.value));
                }}
                sx={{
                  border: "1px solid white",
                  borderRadius: "1rem",
                  margin: "0rem 1rem 1rem 0.2rem",
                  width: "17rem",
                  "& .MuiInputBase-input": {
                    fontSize: "1.2rem",
                    color: "white",
                    fontFamily: "Montserrat",
                    letterSpacing: "0.1rem",
                    textTransform: "uppercase",
                    fontWeight: "600",
                  },
                }}
              />
            </Box>
          </Box>
          <Button
            onClick={handleUpdate}
            sx={{
              marginTop: "0.5rem",
              backgroundColor: "white",
              ":hover": {
                backgroundColor: "#4B6858",
                color: "white",
              },
            }}
          >
            <Typography
              sx={{
                color: "#0a0722",
                fontFamily: "Montserrat",
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
            >
              Update
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              padding: "0",
              color: "white",
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
              fontWeight: "600",
              margin: "1rem 0.2rem",
            }}
          >
            Current BMI: {userStats?.bmi}
          </Typography>

          <Box>
            <ReactSpeedometer
              value={userStats?.bmi}
              minValue={0}
              maxValue={40}
              needleColor="black"
              forceRender={true}
              customSegmentStops={[0, 14, 18.5, 24.9, 29.9, 40]}
              segmentColors={[
                "#bc2020",
                "#d38888",
                "#008137",
                "#ffe400",
                "#bc2020",
              ]}
              needleHeightRatio={0.7}
              customSegmentLabels={[
                {
                  text: "Underweight",
                  position: CustomSegmentLabelPosition.Outside,
                  color: "#bc2020",
                },
                {
                  text: "Thin",
                  position: CustomSegmentLabelPosition.Outside,
                  color: "#d38888",
                },
                {
                  text: "Normal",
                  position: CustomSegmentLabelPosition.Outside,
                  color: "#008137",
                },
                {
                  text: "Overweight",
                  position: CustomSegmentLabelPosition.Outside,
                  color: "#ffe400",
                },
                {
                  text: "Obese",
                  position: CustomSegmentLabelPosition.Outside,
                  color: "#bc2020",
                },
              ]}
              needleTransitionDuration={3333}
              needleTransition={Transition.easeElastic}
              labelFontSize={"0.8rem"}
              // valueTextFontSize={"1.5rem"}
            />
          </Box>
        </Box>
      </Box>
      <NavBar />
    </Box>
  );
};

export default Measurements;
