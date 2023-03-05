import { useState } from "react";
import { Box, Button, Stack } from "@mui/material";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
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

  if (localStorage.getItem("workouts")) {
    setWorkouts(JSON.parse(localStorage.getItem("workouts")));
  }

  return (
    <Box>
      <h2>All Workouts</h2>
      <Box>
        {workouts.length != 0 ? (
          temp.map((workout) => (
            <Box key={workout.id}>
              <h3>{workout.name}</h3>
              <p>{workout.description}</p>
              <Button variant="contained" color="primary">
                Edit
              </Button>
              <Button variant="contained" color="error">
                Delete
              </Button>
              <h4>Exercises</h4>
              <Stack direction="row" spacing={2}>
                {workout.exercises.map((exercise) => (
                  <Box key={exercise.id}>
                    <h5>{exercise.name}</h5>
                    <p>{exercise.description}</p>
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </Box>
                ))}
              </Stack>
            </Box>
          ))
        ) : (
          <h3>No workouts yet</h3>
        )}
      </Box>
      <Button>
        <a href="/AddWorkout">Add Workout</a>
      </Button>
    </Box>
  );
};

export default Workouts;
