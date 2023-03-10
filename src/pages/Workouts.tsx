import { useEffect, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import NavBar from "@/components/NavBar";
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Router from "next/router";
import { NewLineKind } from "typescript";

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
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#060009",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "700px",
          border: "1px solid red",
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

        <List sx={{ width: "90%" }}>
          {workouts.length != 0 ? (
            workouts.map((workout: any) => (
              <>
                <ListItemButton
                  key={workout.id}
                  onClick={() => handleClick(workout.id)}
                  sx={{
                    backgroundColor: "#FFFFFC",
                    color: "#060009",
                    margin: "0.5rem",
                    borderRadius: "0.7rem",
                    height: "4rem",
                    ":hover": {
                      backgroundColor: "#BEB7A4",
                    },
                  }}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={workout.id + ". " + workout.name}
                    sx={{
                      fontFamily: "Inter",
                      textTransform: "uppercase",
                      color: "#060009",
                      letterSpacing: "0.15rem",
                    }}
                  />
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
                  <Button onClick={() => deleteHandler(workout.id)}>
                    <Delete />
                  </Button>
                  <Button onClick={() => editHandler(workout.id)}>
                    <Edit />
                  </Button>
                </ListItemButton>
                <Collapse in={open === workout.id} timeout="auto" unmountOnExit>
                  <Box
                    sx={{
                      backgroundColor: "#FFFFFC",
                      color: "#060009",
                    }}
                  >
                    {workout.exercises.map((exercise: any) => {
                      return (
                        <Box key={exercise.id}>
                          <p>{exercise.name}</p>
                        </Box>
                      );
                    })}
                  </Box>
                </Collapse>
              </>
            ))
          ) : (
            <h3>No Workouts</h3>
          )}
        </List>

        <Button onClick={() => Router.push("/NewWorkout")}>Add Workout</Button>
        <NavBar />
      </Box>
    </Box>
  );
};

export default Workouts;
