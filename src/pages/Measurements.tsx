import {
  Box,
  Button,
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
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  firstInitialize,
  getUserInfo,
  updateAge,
  updateGender,
  updateWeight,
  updateHeightFT,
  updateHeightIN,
  updateBMI,
  updateBodyFat,
  updateBicep,
  updateChest,
  updateWaist,
  updateNeck,
  updateHips,
  updateUserInfo,
} from "@/redux/userInfoSlice";

const Measurements = () => {
  const [heightFT, setHeightFT] = useState<number>();
  const [heightIN, setHeightIN] = useState<any>();
  const [weight, setWeight] = useState<any>();
  const [neck, setNeck] = useState<any>();
  const [waist, setWaist] = useState<any>();
  const [hips, setHips] = useState<any>();
  const [gender, setGender] = useState<any>();
  const userInfo = useAppSelector((state) => state.userInfo);
  const cnt = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(firstInitialize());
    dispatch(getUserInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdate = () => {
    if (heightFT) {
      dispatch(updateHeightFT(heightFT));
    }
    if (heightIN) {
      dispatch(updateHeightIN(heightIN));
    }
    if (weight) {
      dispatch(updateWeight(weight));
    }
    if (neck) {
      dispatch(updateNeck(neck));
    }
    if (waist) {
      dispatch(updateWaist(waist));
    }
    if (hips) {
      dispatch(updateHips(hips));
    }
    if (gender) {
      dispatch(updateGender(gender));
    }
  };

  useEffect(() => {
    var BMI =
      703 *
      ((userInfo.weight * 2.20462) /
        ((userInfo.heightFT * 12 + userInfo.heightIN) *
          (userInfo.heightFT * 12 + userInfo.heightIN)));
    BMI = Math.round(BMI * 100) / 100;
    dispatch(updateBMI(BMI));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo.heightFT, userInfo.heightIN, userInfo.weight]);

  useEffect(() => {
    var bfp = 0;
    if (userInfo.neck !== 0 && userInfo.waist !== 0) {
      if (userInfo.gender === "female") {
        bfp =
          495 /
            (1.29579 -
              0.35004 *
                Math.log10(userInfo.waist + userInfo.hips - userInfo.neck) +
              0.221 *
                Math.log10(
                  (userInfo.heightFT * 12 + userInfo.heightIN) * 2.54
                )) -
          450;
      } else {
        bfp =
          495 /
            (1.0324 -
              0.19077 * Math.log10(userInfo.waist - userInfo.neck) +
              0.15456 *
                Math.log10(
                  (userInfo.heightFT * 12 + userInfo.heightIN) * 2.54
                )) -
          450;
      }

      bfp = Math.round(bfp * 100) / 100;
    }
    dispatch(updateBodyFat(bfp));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    userInfo.heightFT,
    userInfo.heightIN,
    userInfo.weight,
    userInfo.neck,
    userInfo.waist,
    userInfo.hips,
  ]);

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
          }}
        >
          <h2
            style={{
              fontSize: "1.35rem",
              letterSpacing: "0.1rem",
              color: "#F2F0FC",
              textShadow: "0.2rem 0.2rem 0.5rem #000",
            }}
          >
            BODY FITNESS
          </h2>
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
          <Typography
            sx={{
              color: "#F2F0FC",
              fontFamily: "Montserrat",
              fontSize: "0.75rem",
              fontWeight: "600",
              margin: "1rem 0rem 0.5rem 0rem",
              textAlign: "center",
            }}
          >
            *Set height and weight only to calculate BMI.
            <br />
            *Set neck and waist (and hips for Females) to calculate BF%.
          </Typography>
          <Box>
            <Box>
              <Typography
                sx={{
                  color: "#F2F0FC",
                  fontFamily: "Montserrat",
                  fontSize: "1.35rem",
                  fontWeight: "600",
                  margin: "1rem 0.2rem",
                }}
              >
                Current Height:
              </Typography>
              <input
                defaultValue={userInfo.heightFT}
                style={{
                  border: "1px solid #F2F0FC",
                  borderRadius: "1rem 0 0 1rem",
                  width: "8rem",
                  height: "3rem",
                  margin: "0rem 0rem 1rem 0.2rem",
                  backgroundColor: "#0a0722",
                  fontSize: "1.2rem",
                  color: "#F2F0FC",
                  fontFamily: "Montserrat",
                  letterSpacing: "0.1rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  padding: "0.5rem",
                }}
                onChange={(e) => {
                  setHeightFT(parseInt(e.target.value));
                }}
              />{" "}
              <span
                style={{
                  color: "#F2F0FC",
                  fontFamily: "Montserrat",
                  fontSize: "1.35rem",
                  fontWeight: "600",
                }}
              >
                ft
              </span>
              <input
                defaultValue={userInfo.heightIN}
                style={{
                  border: "1px solid #F2F0FC",
                  borderRadius: "0rem 1rem 1rem 0rem",
                  width: "8rem",
                  height: "3rem",
                  margin: "0rem 0rem 1rem 0.2rem",
                  backgroundColor: "#0a0722",
                  fontSize: "1.2rem",
                  color: "#F2F0FC",
                  fontFamily: "Montserrat",
                  letterSpacing: "0.1rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  padding: "0.5rem",
                }}
                onChange={(e) => {
                  setHeightIN(parseInt(e.target.value));
                }}
              />{" "}
              <span
                style={{
                  color: "#F2F0FC",
                  fontFamily: "Montserrat",
                  fontSize: "1.35rem",
                  fontWeight: "600",
                }}
              >
                in
              </span>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#F2F0FC",
                  fontFamily: "Montserrat",
                  fontSize: "1.35rem",
                  fontWeight: "600",
                  margin: "0rem 0.2rem 1rem 0.2rem",
                }}
              >
                {" "}
                Current Weight:
              </Typography>
              <input
                defaultValue={userInfo.weight}
                style={{
                  border: "1px solid #F2F0FC",
                  borderRadius: "1rem",
                  width: "17.5rem",
                  height: "3rem",
                  margin: "0rem 0rem 1rem 0.2rem",
                  backgroundColor: "#0a0722",
                  fontSize: "1.2rem",
                  color: "#F2F0FC",
                  fontFamily: "Montserrat",
                  letterSpacing: "0.1rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  padding: "0.5rem",
                }}
                onChange={(e) => {
                  setWeight(parseInt(e.target.value));
                }}
              />{" "}
              <span
                style={{
                  color: "#F2F0FC",
                  fontFamily: "Montserrat",
                  fontSize: "1.35rem",
                  fontWeight: "600",
                }}
              >
                kg
              </span>
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
              color: "#F2F0FC",
              fontFamily: "Montserrat",
              fontSize: "1.35rem",
              fontWeight: "600",
              margin: "1rem 0.2rem",
            }}
          >
            Current BMI: {userInfo.bmi}
          </Typography>

          <Box
            sx={{
              height: "12rem",
            }}
          >
            <ReactSpeedometer
              value={userInfo.bmi}
              minValue={0}
              maxValue={40}
              needleColor="#F2F0FC"
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
                color: "#F2F0FC",
                fontFamily: "Montserrat",
                fontSize: "1.35rem",
                fontWeight: "600",
                margin: "0rem",
              }}
            >
              Body Fat: {userInfo.bodyFat}% <br />
            </Typography>
            <Typography
              sx={{
                padding: "0",
                color: "#F2F0FC",
                fontFamily: "Montserrat",
                fontSize: "1rem",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Fat Mass:{" "}
              {Math.round(((userInfo.bodyFat * userInfo.weight) / 100) * 100) /
                100}
              kg <br />
              Lean Mass:{" "}
              {userInfo.neck && userInfo.weight && userInfo.bodyFat
                ? Math.round(
                    (userInfo.weight -
                      Math.round(
                        ((userInfo.bodyFat * userInfo.weight) / 100) * 100
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
                    color: "#F2F0FC",
                    fontFamily: "Montserrat",
                    fontSize: "1.35rem",
                    fontWeight: "600",
                    margin: "0rem 0.2rem",
                  }}
                >
                  Neck
                </Typography>
                <input
                  defaultValue={userInfo.neck}
                  style={{
                    border: "1px solid #F2F0FC",
                    borderRadius: "1rem 0 0 1rem",
                    width: "8rem",
                    height: "3rem",
                    margin: "0.5rem 0.25rem 1rem 0.2rem",
                    backgroundColor: "#0a0722",
                    fontSize: "1.2rem",
                    color: "#F2F0FC",
                    fontFamily: "Montserrat",
                    letterSpacing: "0.1rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    padding: "0.5rem",
                  }}
                  onChange={(e) => {
                    setNeck(parseInt(e.target.value));
                  }}
                />{" "}
                {/* <span
                  style={{
                    color: "#F2F0FC",
                    fontFamily: "Montserrat",
                    fontSize: "1.35rem",
                    fontWeight: "600",
                  }}
                >
                  cm
                </span> */}
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
                    color: "#F2F0FC",
                    fontFamily: "Montserrat",
                    fontSize: "1.35rem",
                    fontWeight: "600",
                    margin: "0rem 0.2rem",
                  }}
                >
                  Waist
                </Typography>
                <input
                  defaultValue={userInfo.waist}
                  style={{
                    border: "1px solid #F2F0FC",
                    width: "8rem",
                    height: "3rem",
                    margin: "0.5rem 0.25rem 1rem 0.25rem",
                    backgroundColor: "#0a0722",
                    fontSize: "1.2rem",
                    color: "#F2F0FC",
                    fontFamily: "Montserrat",
                    letterSpacing: "0.1rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    padding: "0.5rem",
                  }}
                  onChange={(e) => {
                    setWaist(parseInt(e.target.value));
                  }}
                />{" "}
                {/* <span
                  style={{
                    color: "#F2F0FC",
                    fontFamily: "Montserrat",
                    fontSize: "1.35rem",
                    fontWeight: "600",
                  }}
                >
                  cm
                </span> */}
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
                    color: userInfo.gender === "male" ? "grey" : "#F2F0FC",
                    fontFamily: "Montserrat",
                    fontSize: "1.35rem",
                    fontWeight: "600",
                    margin: "0rem 0.2rem",
                  }}
                >
                  Hips
                </Typography>
                <input
                  defaultValue={userInfo.hips}
                  disabled={userInfo.gender === "male" ? true : false}
                  style={{
                    border: "1px solid #F2F0FC",
                    borderColor:
                      userInfo.gender === "male" ? "grey" : "#F2F0FC",
                    borderRadius: "0 1rem 1rem 0",
                    width: "8rem",
                    height: "3rem",
                    margin: "0.5rem 0.5rem 1rem 0.25rem",
                    backgroundColor: "#0a0722",
                    fontSize: "1.2rem",
                    color: userInfo.gender === "male" ? "grey" : "#F2F0FC",
                    fontFamily: "Montserrat",
                    letterSpacing: "0.1rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    padding: "0.5rem",
                  }}
                  onChange={(e) => {
                    setHips(parseInt(e.target.value));
                  }}
                />{" "}
                {/* <span
                  style={{
                    color: "#F2F0FC",
                    fontFamily: "Montserrat",
                    fontSize: "1.35rem",
                    fontWeight: "600",
                  }}
                >
                  cm
                </span> */}
              </Box>
            </Box>
            <RadioGroup
              defaultValue={userInfo.gender ? userInfo.gender : "male"}
              row
              onChange={(e) => {
                dispatch(updateGender(e.target.value));
              }}
            >
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    sx={{
                      color: "#F2F0FC",
                      "&.Mui-checked": {
                        color: "#F2F0FC",
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
                      color: "#F2F0FC",
                      "&.Mui-checked": {
                        color: "#F2F0FC",
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
                backgroundColor: "#F2F0FC",
                ":hover": {
                  backgroundColor: "#E5446D",
                  color: "#F2F0FC",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#0a0722",
                  fontFamily: "Montserrat",
                  fontSize: "1.2rem",
                  fontWeight: "700",
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
