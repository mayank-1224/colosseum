import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  List,
  Collapse,
  IconButton,
  TextField,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Delete,
  Edit,
  PlayArrow,
  CheckCircle,
} from "@mui/icons-material";
import NavBar from "@/components/NavBar";
import Router from "next/router";

const OngoingWorkout = (states: any) => {
  const [elapsedTime, setElapsedTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [workout, setWorkout] = useState({
    name: states?.startWorkout?.name,
    exercises: states?.startWorkout?.exercises,
  });
  const [open, setOpen] = useState(0);
  // const [roundedBorder, setRoundedBorder] = useState(true);

  useEffect(() => {
    const startWorkout = JSON.parse(localStorage.getItem("startWorkout")!);
    setWorkout(startWorkout);
    console.log(startWorkout);
    const timer = setInterval(() => {
      setElapsedTime((prevElapsedTime) => {
        if (prevElapsedTime.seconds === 59) {
          if (prevElapsedTime.minutes === 59) {
            return {
              seconds: 0,
              minutes: 0,
              hours: prevElapsedTime.hours + 1,
            };
          }
          return {
            seconds: 0,
            minutes: prevElapsedTime.minutes + 1,
            hours: prevElapsedTime.hours,
          };
        }
        return {
          seconds: prevElapsedTime.seconds + 1,
          minutes: prevElapsedTime.minutes,
          hours: prevElapsedTime.hours,
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = (id: number) => {
    // setRoundedBorder(!roundedBorder);
    setOpen(id);
    if (open === id) {
      setOpen(0);
    }
  };

  const handleSetComplete = (i: number, id: number) => {
    const updatedExercises = workout.exercises.map((exercise: any) => {
      if (exercise.id === id) {
        exercise.sets[i].completed
          ? (exercise.sets[i].completed = false)
          : (exercise.sets[i].completed = true);
      }
      return exercise;
    });
    setWorkout((prevWorkout) => {
      return {
        ...prevWorkout,
        exercises: updatedExercises,
      };
    });
  };

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
            Ongoing: {workout.name}
          </h2>
        </Box>
        <Box>
          <Typography>
            Time Elapsed:{" "}
            {(elapsedTime.hours - 10 < 0 ? "0" : "") +
              elapsedTime.hours +
              ":" +
              (elapsedTime.minutes - 10 < 0 ? "0" : "") +
              elapsedTime.minutes +
              ":" +
              (elapsedTime.seconds - 10 < 0 ? "0" : "") +
              elapsedTime.seconds}{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {workout?.exercises?.map((exercise: any, index: number) => (
            <>
              <Box
                key={exercise.id}
                sx={{
                  width: "100%",
                  height: "3rem",
                  backgroundColor: "#F2F1FC",

                  // borderRadius: "0.5rem",
                  // borderRadius: roundedBorder ? "0.5rem" : "0.5rem 0.5rem 0 0",
                  padding: "0.5rem",
                  marginTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  ":hover": {
                    backgroundColor: "#E3E0F9",
                    cursor: "pointer",
                  },
                }}
                onClick={() => handleClick(exercise.id)}
              >
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    color: "#0a0722",
                  }}
                >
                  {exercise.name}
                </Typography>
                {open === exercise.id ? (
                  <ExpandLess
                    sx={{
                      color: "#060009",
                    }}
                  />
                ) : (
                  <ExpandMore
                    sx={{
                      color: "#060009",
                    }}
                  />
                )}
              </Box>

              <Collapse
                in={open === exercise.id}
                timeout="auto"
                unmountOnExit
                sx={{
                  backgroundColor: "#F2F1FC",
                  // borderRadius: roundedBorder ? "0" : "0 0 0.5rem 0.5rem",
                  padding: "0.5rem",
                }}
              >
                {exercise.sets.map((set: any, i: number) => {
                  return (
                    <Box
                      key={i}
                      sx={{
                        width: "100%",
                        height: "4rem",
                        borderRadius: "0.5rem",
                        padding: "0.5rem",
                        marginBottom: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        boxShadow: "0px 0px 2px #000",
                        backgroundColor: set.completed ? "#40916C" : "",
                        // ":hover": {
                        //   backgroundColor: "#E3E0F9",
                        //   cursor: "pointer",
                        // },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "600",
                          color: "#0a0722",
                        }}
                      >
                        Set {set.setNumber}
                      </Typography>
                      <OutlinedInput
                        endAdornment={
                          <InputAdornment
                            position="end"
                            sx={{
                              "& .MuiTypography-root": {
                                color: "#495057",
                              },
                            }}
                          >
                            kg
                          </InputAdornment>
                        }
                        sx={{
                          border: "1px solid black",
                          borderRadius: "1rem 0 0 1rem",
                          width: "8rem",
                          height: "3rem",
                          "& .MuiInputBase-input": {
                            fontSize: "1.2rem",
                            color: "black",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            letterSpacing: "0.1rem",
                          },
                          "& .MuiInputBase-root-MuiOutlinedInput-root": {
                            // border: "1px solid black",
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "600",
                          color: "#0a0722",
                        }}
                      >
                        x
                      </Typography>
                      <OutlinedInput
                        endAdornment={
                          <InputAdornment
                            position="end"
                            sx={{
                              "& .MuiTypography-root": {
                                color: "#495057",
                              },
                            }}
                          >
                            reps
                          </InputAdornment>
                        }
                        sx={{
                          border: "1px solid black",
                          borderRadius: "0 1rem 1rem 0",
                          width: "8rem",
                          height: "3rem",
                          "& .MuiInputBase-input": {
                            fontSize: "1.2rem",
                            color: "black",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            letterSpacing: "0.1rem",
                          },
                        }}
                      />
                      <IconButton
                        onClick={() => handleSetComplete(i, exercise.id)}
                        sx={{
                          color: set.completed ? "white" : "#40916C",
                          "&:hover": {
                            backgroundColor: "#40916C",
                            color: "white",
                          },
                        }}
                      >
                        <CheckCircle />
                      </IconButton>
                    </Box>
                  );
                })}
              </Collapse>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OngoingWorkout;
