/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  List,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Delete,
  Edit,
  PlayArrow,
} from "@mui/icons-material";
import NavBar from "@/components/NavBar";
import Router from "next/router";
import {
  firstInitialize,
  getUserWorkouts,
  addWorkout,
  deleteWorkout,
} from "@/redux/userWorkoutsSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

const Workouts = (states: any) => {
  // const [workouts, setWorkouts] = useState<any>([]);
  const [open, setOpen] = useState(0);
  const userWorkouts = useAppSelector((state) => state.userWorkouts);
  const dispatch = useAppDispatch();

  const handleClick = (id: number) => {
    setOpen(id);
    if (open === id) {
      setOpen(0);
    }
  };

  useEffect(() => {
    dispatch(firstInitialize());
    dispatch(getUserWorkouts());
    // if (localStorage.getItem("workouts")) {
    //   setWorkouts(JSON.parse(localStorage.getItem("workouts") || "[]"));
    // }
    // states.setEditWorkout(null);
  }, []);

  const deleteHandler = (id: number) => {
    const newWorkouts = userWorkouts.filter(
      (workout: any) => workout.id !== id
    );
    newWorkouts.forEach((workout: any, index: number) => {
      workout.id = index + 1;
    });
    localStorage.setItem("userWorkouts", JSON.stringify(newWorkouts));
    dispatch(getUserWorkouts());
  };

  const editHandler = (id: number) => {
    const temp = JSON.parse(localStorage.getItem("userWorkouts") || "[]");
    const workout = temp.filter((workout: any) => workout.id === id);
    states.setEditWorkout(workout[0]);
    Router.push("/NewWorkout");
  };

  const startWorkout = (id: number) => {
    const workout = userWorkouts.filter((workout: any) => workout.id === id);
    localStorage.setItem("startWorkout", JSON.stringify(workout[0]));
    states.setStartWorkout(workout[0]);
    Router.push("/OngoingWorkout");
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
            YOUR WORKOUTS
          </h2>
        </Box>

        <List sx={{ width: "100%" }}>
          {userWorkouts.length != 0 ? (
            userWorkouts.map((workout: any) => (
              <>
                <Box
                  key={workout.id}
                  sx={{
                    backgroundColor: "#F2F1FC",
                    color: "#060009",
                    margin: "1rem 0.75rem",
                    marginBottom: "0",
                    borderRadius: "1rem",
                    height: "3.75rem",
                    fontFamily: "Montserrat, sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.05rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 1rem",
                    ":hover": {
                      backgroundColor: "#E3E0F9",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box
                    onClick={() => handleClick(workout.id)}
                    sx={{
                      height: "100%",
                      minWidth: "65%",
                      maxWidth: "65%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingRight: "1rem",
                    }}
                  >
                    <h3>{workout.id + ". " + workout.name}</h3>
                    {open === workout.id ? (
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: "35%",
                    }}
                  >
                    <IconButton
                      onClick={() => startWorkout(workout.id)}
                      sx={{
                        backgroundColor: "#62aa86",
                        borderRadius: "2rem",
                        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                        color: "#FFFFFC",
                        marginRight: "0.5rem",
                        ":hover": {
                          backgroundColor: "#437C60",
                          color: "black",
                        },
                      }}
                    >
                      <PlayArrow />
                    </IconButton>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <IconButton
                        onClick={() => editHandler(workout.id)}
                        sx={{
                          color: "#219EBC",

                          ":hover": {
                            backgroundColor: "#197A91",
                            color: "#FFFFFC",
                          },
                        }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        onClick={() => deleteHandler(workout.id)}
                        sx={{
                          color: "#E5446D",
                          ":hover": {
                            backgroundColor: "#D81E4D",
                            color: "#FFFFFC",
                          },
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
                <Collapse in={open === workout.id} timeout="auto" unmountOnExit>
                  {workout.exercises.length > 0 ? (
                    <Box
                      sx={{
                        backgroundColor: "#FFFFFC",
                        color: "#060009",
                        margin: "0.2rem 1rem 0rem 1rem",
                        borderRadius: "0.7rem",
                        minHeight: "2rem",
                        fontFamily: "Inter",
                        display: "flex",
                        flexDirection: "column",
                        padding: "0 1rem",
                      }}
                    >
                      {workout.exercises.map((exercise: any) => {
                        return (
                          <Box
                            key={exercise.id}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <p
                              style={{
                                margin: "0.2rem 0",
                              }}
                            >
                              {exercise.name}
                            </p>
                            <p
                              style={{
                                margin: "0.2rem 0",
                              }}
                            >
                              {exercise.sets.length} Sets
                            </p>
                          </Box>
                        );
                      })}
                    </Box>
                  ) : (
                    <></>
                  )}
                </Collapse>
              </>
            ))
          ) : (
            <>
              <h3
                style={{
                  color: "#FFFFFC",
                  fontFamily: "Inter",
                  letterSpacing: "0.15rem",
                  margin: "1rem",
                  textTransform: "uppercase",
                }}
              >
                No Workouts FOUND
              </h3>
              <p
                style={{
                  color: "#FFFFFC",
                  fontFamily: "Inter",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1rem",
                  lineHeight: "1rem",
                  margin: "1rem",
                }}
              >
                Click the button below to create a new workout and add exercises
              </p>
            </>
          )}
        </List>
        <Button
          onClick={() => Router.push("/NewWorkout")}
          sx={{
            backgroundColor: "#219EBC",
            color: "white",
            borderRadius: "2rem",
            width: "80%",
            margin: "0.4rem",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            ":hover": {
              backgroundColor: "#E5446D",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.2rem",
              fontWeight: "500",
              letterSpacing: "0.05rem",
            }}
          >
            Create New Workout
          </Typography>
        </Button>
        <NavBar />
      </Box>
    </Box>
  );
};

export default Workouts;
