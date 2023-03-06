import { useEffect, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import NavBar from "@/components/NavBar";
import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const temp = [
    {
      id: 1,
      name: "Workout 1",
      description: "This is a description of workout 1",
      exercises: [
        {
          id: 1,
          name: "Exercise 1",
          description: "This is a description of exercise 1",
        },
        {
          id: 2,
          name: "Exercise 2",
          description: "This is a description of exercise 2",
        },
      ],
    },
    {
      id: 2,
      name: "Workout 2",
      description: "This is a description of workout 2",
      exercises: [
        {
          id: 3,
          name: "Exercise 3",
          description: "This is a description of exercise 3",
        },
        {
          id: 4,
          name: "Exercise 4",
          description: "This is a description of exercise 4",
        },
      ],
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("workouts")) {
      setWorkouts(JSON.parse(localStorage.getItem("workouts")));
    }
  }, []);

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

        <List sx={{ width: "100%", maxWidth: 360, backgroundColor: "#FFFFFC" }}>
          {temp.length != 0 ? (
            temp.map((workout) => (
              <>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={workout.name}
                    sx={{
                      color: "#060009",
                    }}
                  />
                  {open ? (
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
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText
                        primary={workout.description}
                        sx={{
                          color: "#060009",
                        }}
                      />
                    </ListItemButton>
                  </List>
                </Collapse>
              </>
            ))
          ) : (
            <h3>No Workouts</h3>
          )}
        </List>

        <Button>
          <a href="/AddWorkout">Add Workout</a>
        </Button>
        <NavBar />
      </Box>
    </Box>
  );
};

export default Workouts;
