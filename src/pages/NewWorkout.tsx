import { useEffect, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import NavBar from "@/components/NavBar";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Router from "next/router";

const NewWorkout = () => {
  const [update, setUpdate] = useState(false);
  const [exerciseSelect, setExerciseSelect] = useState<ExerciseOption | null>(
    null
  );
  const [newWorkout, setNewWorkout] = useState<WorkoutTemplate>({
    id: -1,
    name: "",
    exercises: [],
  });

  const defaultProps = {
    options: allExercises,
    getOptionLabel: (option: ExerciseOption) => option.name,
  };

  useEffect(() => {
    if (exerciseSelect) {
      const newId = newWorkout.exercises.length + 1;
      const newExercise = {
        id: newId,
        name: exerciseSelect.name,
        muscleGroup: exerciseSelect.muscleGroup,
        sets: 0,
      };
      newWorkout.exercises.push(newExercise);
      setExerciseSelect(null);
    }
  }, [exerciseSelect, update, newWorkout]);

  const deleteHandler = (id: number) => {
    const newExerciseArray = newWorkout.exercises.filter((exercise) => {
      return exercise.id !== id;
    });

    newExerciseArray.forEach((exercise, index) => {
      exercise.id = index + 1;
    });

    setNewWorkout({
      ...newWorkout,
      exercises: newExerciseArray,
    });
  };

  const saveHandler = () => {
    const savedWorkouts = JSON.parse(localStorage.getItem("workouts") || "[]");
    newWorkout.id = savedWorkouts.length + 1;
    savedWorkouts.push(newWorkout);
    localStorage.setItem("workouts", JSON.stringify(savedWorkouts));
    Router.push("/Workouts");
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
          backgroundColor: "#FFFFFC",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
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
          <h2>CREATE NEW WORKOUT</h2>
        </Box>
        <Box
          sx={{
            height: "85%",
            width: "95%",
          }}
        >
          <TextField
            fullWidth
            id="standard-basic"
            label="Workout Name"
            variant="standard"
            sx={{
              backgroundColor: "#FFFFFC",
              borderRadius: "5px",
            }}
            onChange={(event) => {
              newWorkout.name = event.target.value;
            }}
          />
          <Grid item xs={12} md={6}>
            <List>
              {newWorkout.exercises.map((exercise) => {
                return (
                  <>
                    <ListItem
                      key={exercise.id}
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon
                            onClick={() => {
                              deleteHandler(exercise.id);
                            }}
                          />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={exercise.id + ". " + exercise.name}
                        secondary={exercise.muscleGroup}
                        sx={{
                          color: "black",
                        }}
                      />
                    </ListItem>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "black",
                      }}
                    >
                      Sets: {exercise.sets}
                    </Typography>
                    <Button
                      onClick={() => {
                        exercise.sets += 1;
                        setUpdate(!update);
                      }}
                    >
                      <Typography variant="h6">Add Sets</Typography>
                    </Button>
                  </>
                );
              })}
            </List>
          </Grid>
          <Autocomplete
            {...defaultProps}
            id="auto-complete"
            autoComplete
            includeInputInList
            renderInput={(params) => (
              <TextField {...params} label="Exercise" variant="standard" />
            )}
            onChange={(event: any, newValue: ExerciseOption | null) => {
              setExerciseSelect(newValue);
            }}
          />
          <Button onClick={saveHandler}>
            <Typography variant="h6">Save Workout</Typography>
          </Button>
        </Box>

        <NavBar />
      </Box>
    </Box>
  );
};

export default NewWorkout;

interface WorkoutTemplate {
  id: number;
  name: string;
  exercises: ExerciseTemplate[];
}

interface ExerciseTemplate {
  id: number;
  name: string;
  muscleGroup: string;
  sets: number;
}

interface ExerciseOption {
  name: string;
  muscleGroup: string;
}

const allExercises = [
  { name: "Flat Bench Press - Barbell", muscleGroup: "Chest" },
  { name: "Incline Bench Press - Barbell", muscleGroup: "Chest" },
  { name: "Decline Bench Press- Barbell", muscleGroup: "Chest" },
  { name: "Flat Bench Press - Dumbbell", muscleGroup: "Chest" },
  { name: "Incline Bench Press - Dumbbell", muscleGroup: "Chest" },
  { name: "Decline Bench Press - Dumbbell", muscleGroup: "Chest" },
  { name: "Machine Pec Deck", muscleGroup: "Chest" },
  { name: "Cable Crossover - Low to High", muscleGroup: "Chest" },
  { name: "Cable Crossover - High to Low", muscleGroup: "Chest" },
  { name: "Dumbbell Chest Fly", muscleGroup: "Chest" },
  { name: "Hex Press", muscleGroup: "Chest" },
  { name: "Dumbbell Pullover", muscleGroup: "Chest" },
  { name: "Cable Pullover", muscleGroup: "Chest" },
  { name: "Deadlift - Conventional", muscleGroup: "Back" },
  { name: "Deadlift - Sumo", muscleGroup: "Back" },
  { name: "Lat Pulldown - Close Grip", muscleGroup: "Back" },
  { name: "Lat Pulldown - Wide Grip", muscleGroup: "Back" },
  { name: "Seated Cable Row", muscleGroup: "Back" },
  { name: "Bent Over Barbell Row", muscleGroup: "Back" },
  { name: "Bent Over Dumbbell Row", muscleGroup: "Back" },
  { name: "T-Bar Row", muscleGroup: "Back" },
  { name: "Cable Row", muscleGroup: "Back" },
  { name: "Cable Row - Close Grip", muscleGroup: "Back" },
  { name: "Cable Row - Wide Grip", muscleGroup: "Back" },
  { name: "Straight Arm Pulldown", muscleGroup: "Back" },
  { name: "Military Press - Barbell", muscleGroup: "Shoulders" },
  { name: "Military Press - Dumbbell", muscleGroup: "Shoulders" },
  { name: "Seated Dumbbell Press", muscleGroup: "Shoulders" },
  { name: "Lateral Raise", muscleGroup: "Shoulders" },
  { name: "Front Raise", muscleGroup: "Shoulders" },
  { name: "Rear Delt Fly", muscleGroup: "Shoulders" },
  { name: "Upright Row", muscleGroup: "Shoulders" },
  { name: "Arnold Press", muscleGroup: "Shoulders" },
  { name: "Face Pull", muscleGroup: "Shoulders" },
  { name: "Bent Over Lateral Raise", muscleGroup: "Shoulders" },
  { name: "Shrugs - Barbell", muscleGroup: "Shoulders" },
  { name: "Shrugs - Dumbbell", muscleGroup: "Shoulders" },
  { name: "Squat - Barbell", muscleGroup: "Legs" },
  { name: "Squat - Dumbbell", muscleGroup: "Legs" },
  { name: "Squat - Smith Machine", muscleGroup: "Legs" },
  { name: "Leg Press", muscleGroup: "Legs" },
  { name: "Leg Extension", muscleGroup: "Legs" },
  { name: "Leg Curl", muscleGroup: "Legs" },
  { name: "Lunges", muscleGroup: "Legs" },
  { name: "Calf Raises", muscleGroup: "Legs" },
  { name: "Romanian Deadlift", muscleGroup: "Legs" },
  { name: "Close Grip Bench Press", muscleGroup: "Triceps" },
  { name: "Tricep Pushdown", muscleGroup: "Triceps" },
  { name: "Tricep Extension - Rope", muscleGroup: "Triceps" },
  { name: "Tricep Extension - Dumbbell", muscleGroup: "Triceps" },
  { name: "Skullcrusher", muscleGroup: "Triceps" },
  { name: "Tricep Kickback", muscleGroup: "Triceps" },
  { name: "Bicep Curl - Barbell", muscleGroup: "Biceps" },
  { name: "Bicep Curl - Dumbbell", muscleGroup: "Biceps" },
  { name: "Bicep Curl - EZ Bar", muscleGroup: "Biceps" },
  { name: "Bicep Curl - Cable", muscleGroup: "Biceps" },
  { name: "Hammer Curl", muscleGroup: "Biceps" },
  { name: "Preacher Curl", muscleGroup: "Biceps" },
  { name: "Concentration Curl", muscleGroup: "Biceps" },
  { name: "Incline Bicep Curl", muscleGroup: "Biceps" },
  { name: "Crunch", muscleGroup: "Abs" },
  { name: "Leg Raise", muscleGroup: "Abs" },
  { name: "Hanging Leg Raise", muscleGroup: "Abs" },
  { name: "Russian Twist", muscleGroup: "Abs" },
  { name: "Plank", muscleGroup: "Abs" },
  { name: "Side Plank", muscleGroup: "Abs" },
];
