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
import ReactSpeedometer, {
  CustomSegmentLabelPosition,
  Transition,
} from "react-d3-speedometer";

const Measurements = () => {
  const [userStats, setUserStats] = useState<any>();
  const [heightFT, setHeightFT] = useState<any>();
  const [heightIN, setHeightIN] = useState<any>();
  const [weight, setWeight] = useState<any>();
  const [neck, setNeck] = useState<any>();
  const [waist, setWaist] = useState<any>();
  const [hips, setHips] = useState<any>();
  const [gender, setGender] = useState<any>();
  // setUserStats(JSON.parse(localStorage.getItem("userStats")!));

  useEffect(() => {
    const userStatsTEMP = JSON.parse(localStorage.getItem("userStats")!);
    setUserStats(userStatsTEMP);
    // setNeck(userStatsTEMP.neck);
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
    if (neck) {
      userStats.neck = neck;
    }
    if (waist) {
      userStats.waist = waist;
    }
    if (hips) {
      userStats.hips = hips;
    }
    if (gender) {
      userStats.gender = gender;
    }

    var BMI =
      703 *
      ((userStats.weight * 2.20462) /
        ((userStats.heightFT * 12 + userStats.heightIN) *
          (userStats.heightFT * 12 + userStats.heightIN)));
    BMI = Math.round(BMI * 100) / 100;

    var bfp = 0;
    if (userStats.neck !== 0 && userStats.waist !== 0) {
      if (userStats.gender === "female") {
        bfp =
          495 /
            (1.29579 -
              0.35004 *
                Math.log10(userStats.waist + userStats.hips - userStats.neck) +
              0.221 *
                Math.log10(
                  (userStats.heightFT * 12 + userStats.heightIN) * 2.54
                )) -
          450;
      } else {
        bfp =
          495 /
            (1.0324 -
              0.19077 * Math.log10(userStats.waist - userStats.neck) +
              0.15456 *
                Math.log10(
                  (userStats.heightFT * 12 + userStats.heightIN) * 2.54
                )) -
          450;
      }

      bfp = Math.round(bfp * 100) / 100;
    }

    var newStats = {
      ...userStats,
      bmi: BMI,
      bodyFat: bfp,
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
          height: "100vh",
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
                      "& .MuiTypography-root": {
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
                      "& .MuiTypography-root": {
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
                      "& .MuiTypography-root": {
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

          <Box
            sx={{
              height: "12rem",
            }}
          >
            <ReactSpeedometer
              value={userStats?.bmi}
              minValue={0}
              maxValue={40}
              needleColor="white"
              // forceRender={true}
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
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "0.5rem",
            }}
          >
            <Typography
              sx={{
                padding: "0",
                color: "white",
                fontFamily: "Montserrat",
                fontSize: "1.5rem",
                fontWeight: "600",
                margin: "0rem",
              }}
            >
              Body Fat: {userStats?.bodyFat}% <br />
            </Typography>
            <Typography
              sx={{
                padding: "0",
                color: "white",
                fontFamily: "Montserrat",
                fontSize: "1rem",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Fat Mass:{" "}
              {Math.round(
                ((userStats?.bodyFat * userStats?.weight) / 100) * 100
              ) / 100}
              kg <br />
              Lean Mass:{" "}
              {userStats?.neck && userStats?.weight && userStats?.bodyFat
                ? Math.round(
                    (userStats?.weight -
                      Math.round(
                        ((userStats?.bodyFat * userStats?.weight) / 100) * 100
                      ) /
                        100) *
                      100
                  ) / 100
                : 0}
              kg
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    padding: "0",
                    color: "white",
                    fontFamily: "Montserrat",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    margin: "0rem 0.2rem",
                  }}
                >
                  Neck
                </Typography>
                <OutlinedInput
                  // value={neck}
                  endAdornment={
                    <InputAdornment
                      position="end"
                      sx={{
                        "& .MuiTypography-root": {
                          color: "white",
                        },
                      }}
                    >
                      cm
                    </InputAdornment>
                  }
                  onChange={(e) => {
                    setNeck(parseInt(e.target.value));
                  }}
                  sx={{
                    border: "1px solid white",
                    borderRadius: "1rem 0 0 1rem",
                    width: "8rem",
                    margin: "0.5rem 0.25rem 1rem 0.2rem",
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    padding: "0",
                    color: "white",
                    fontFamily: "Montserrat",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    margin: "0rem 0.2rem",
                  }}
                >
                  Waist
                </Typography>
                <OutlinedInput
                  endAdornment={
                    <InputAdornment
                      position="end"
                      sx={{
                        "& .MuiTypography-root": {
                          color: "white",
                        },
                      }}
                    >
                      cm
                    </InputAdornment>
                  }
                  onChange={(e) => {
                    setWaist(parseInt(e.target.value));
                  }}
                  sx={{
                    width: "8rem",
                    margin: "0.5rem 0.25rem 1rem 0.25rem",
                    border: "1px solid white",
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    padding: "0",
                    color: userStats?.gender === "male" ? "grey" : "white",
                    fontFamily: "Montserrat",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    margin: "0rem 0.2rem",
                  }}
                >
                  Hips
                </Typography>
                <OutlinedInput
                  disabled={userStats?.gender === "male" ? true : false}
                  endAdornment={
                    <InputAdornment
                      position="end"
                      sx={{
                        "& .MuiTypography-root": {
                          color: "white",
                        },
                      }}
                    >
                      cm
                    </InputAdornment>
                  }
                  onChange={(e) => {
                    setHips(parseInt(e.target.value));
                  }}
                  sx={{
                    border: "1px solid white",
                    borderRadius: "0 1rem 1rem 0",
                    width: "8rem",
                    margin: "0.5rem 0.5rem 1rem 0.25rem",
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
            </Box>
            <RadioGroup
              defaultValue={userStats?.gender ? userStats.gender : "male"}
              row
              onChange={(e) => {
                setUserStats({ ...userStats, gender: e.target.value });
              }}
            >
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
            </RadioGroup>
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
        </Box>
      </Box>
      <NavBar />
    </Box>
  );
};

export default Measurements;
