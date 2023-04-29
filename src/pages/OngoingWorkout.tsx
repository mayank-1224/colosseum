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
import { useAppSelector } from "@/redux/hooks";
import { useAppDispatch } from "@/redux/hooks";
import { updateWorkout } from "@/redux/userWorkoutsSlice";

const OngoingWorkout = (states: any) => {
  const dispatch = useAppDispatch();
  const [elapsedTime, setElapsedTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [workout, setWorkout] = useState({
    id: states?.startWorkout?.id,
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
    localStorage.setItem("startWorkout", JSON.stringify(workout));
    // dispatch(updateWorkout(workout));
  };

  const handleSetReps = (e: any, i: number, id: number) => {
    const updatedExercises = workout.exercises.map((exercise: any) => {
      if (exercise.id === id) {
        exercise.sets[i].reps = e.target.value;
      }
      return exercise;
    });
    setWorkout((prevWorkout) => {
      return {
        ...prevWorkout,
        exercises: updatedExercises,
      };
    });
    localStorage.setItem("startWorkout", JSON.stringify(workout));
    // dispatch(updateWorkout(workout));
  };

  const handleSetWeight = (e: any, i: number, id: number) => {
    const updatedExercises = workout.exercises.map((exercise: any) => {
      if (exercise.id === id) {
        exercise.sets[i].weight = e.target.value;
      }
      return exercise;
    });
    setWorkout((prevWorkout) => {
      return {
        ...prevWorkout,
        exercises: updatedExercises,
      };
    });
    localStorage.setItem("startWorkout", JSON.stringify(workout));
    // dispatch(updateWorkout(workout));
  };

  const handleWorkoutComplete = () => {
    const updatedWorkout = {
      ...workout,
    };
    const userWorkouts = JSON.parse(localStorage.getItem("userWorkouts")!);
    const updatedUserWorkouts = userWorkouts.map((userWorkout: any) => {
      if (userWorkout.id === updatedWorkout.id) {
        userWorkout = updatedWorkout;
      }
      return userWorkout;
    });
    localStorage.setItem("userWorkouts", JSON.stringify(updatedUserWorkouts));
    localStorage.removeItem("startWorkout");
    Router.push("/Workouts");
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
            marginBottom: "1rem",
            position: "fixed",
            top: "0",
            zIndex: 999,
            "@media (max-width: 700px)": {
              width: "100%",
            },
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
        <Box
          sx={{
            marginTop: "3.7rem",
            width: "100%",
            padding: "0.2rem",
            backgroundColor: "#4B6858",
            position: "fixed",
            zIndex: 999,
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
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
            marginTop: "5.5rem",
          }}
        >
          {workout?.exercises?.map((exercise: any, index: number) => (
            <>
              <Box
                sx={{
                  backgroundColor: "#F2F1FC",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  marginBottom: "0.5rem",
                  boxShadow: "0px 0px 2px #000",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "600",
                    color: "#0a0722",
                    marginBottom: "0.5rem",
                  }}
                >
                  {exercise.name}
                </Typography>
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
                        defaultValue={set.weight}
                        onChange={(e) => handleSetWeight(e, i, exercise.id)}
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
                        defaultValue={set.reps}
                        onChange={(e) => handleSetReps(e, i, exercise.id)}
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
              </Box>
            </>
          ))}
        </Box>
        <Box>
          <Button
            onClick={() => handleWorkoutComplete()}
            sx={{
              backgroundColor: "#40916C",
              color: "white",
              width: "100%",
              height: "3rem",
              borderRadius: "0.5rem",
              fontSize: "1.2rem",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.1rem",
              "&:hover": {
                backgroundColor: "#40916C",
                color: "white",
              },
            }}
          >
            Complete Workout
          </Button>
        </Box>
        <NavBar />
      </Box>
    </Box>
  );
};

export default OngoingWorkout;
