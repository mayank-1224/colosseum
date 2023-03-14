/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import NavBar from "@/components/NavBar";
import * as React from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Router from "next/router";

const Workouts = (states: any) => {
  const [workouts, setWorkouts] = useState<any>([]);
  const [open, setOpen] = useState(0);

  const handleClick = (id: number) => {
    setOpen(id);
    if (open === id) {
      setOpen(0);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("workouts")) {
      setWorkouts(JSON.parse(localStorage.getItem("workouts") || "[]"));
    }
    states.setEditWorkout(null);
  }, []);

  const deleteHandler = (id: number) => {
    const newWorkouts = workouts.filter((workout: any) => workout.id !== id);
    newWorkouts.forEach((workout: any, index: number) => {
      workout.id = index + 1;
    });
    setWorkouts(newWorkouts);
    localStorage.setItem("workouts", JSON.stringify(newWorkouts));
  };

  const editHandler = (id: number) => {
    const workout = workouts.filter((workout: any) => workout.id === id);
    states.setEditWorkout(workout[0]);
    Router.push("/NewWorkout");
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
          <h2>WORKOUTS</h2>
        </Box>

        <List sx={{ width: "100%" }}>
          {workouts.length != 0 ? (
            workouts.map((workout: any) => (
              <>
                <Box
                  key={workout.id}
                  sx={{
                    backgroundColor: "#FFFFFC",
                    color: "#060009",
                    margin: "1rem 0.5rem",
                    marginBottom: "0",
                    borderRadius: "0.7rem",
                    height: "4rem",
                    fontFamily: "Inter",
                    textTransform: "uppercase",
                    letterSpacing: "0.15rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 1rem",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.75)",
                    ":hover": {
                      backgroundColor: "#8ECAE6",
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
                    <Button
                      onClick={() => editHandler(workout.id)}
                      sx={{
                        backgroundColor: "#219EBC",
                        borderRadius: "0.7rem",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        color: "#FFFFFC",
                        marginRight: "0.5rem",
                        ":hover": {
                          backgroundColor: "#197A91",
                        },
                      }}
                    >
                      <Edit />
                    </Button>
                    <Button
                      onClick={() => deleteHandler(workout.id)}
                      sx={{
                        color: "#FFFFFC",
                        backgroundColor: "#E5446D",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "0.7rem",
                        ":hover": {
                          backgroundColor: "#D81E4D",
                        },
                      }}
                    >
                      <Delete />
                    </Button>
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
                              {exercise.sets} Sets
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
            width: "98%",
            margin: "0.4rem",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            ":hover": {
              backgroundColor: "#E5446D",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "1.2rem",
              letterSpacing: "0.1rem",
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
