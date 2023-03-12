import * as React from "react";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import NavBar from "@/components/NavBar";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Router from "next/router";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NewWorkout = (states: any) => {
  const [update, setUpdate] = useState(false);
  const [exerciseSelect, setExerciseSelect] = useState<ExerciseOption | null>(
    null
  );
  const [newWorkout, setNewWorkout] = useState<WorkoutTemplate>({
    id: -1,
    name: "",
    exercises: [],
  });
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const defaultProps = {
    options: allExercises,
    getOptionLabel: (option: ExerciseOption) => option.name,
  };

  useEffect(() => {
    if (states.editWorkout) {
      setNewWorkout(states.editWorkout);
      states.setEditWorkout(null);
    }
    console.log(newWorkout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const newExercises = newWorkout.exercises.filter(
      (exercise: any) => exercise.id !== id
    );
    console.log(newExercises);
    newExercises.forEach((exercise: any, index: number) => {
      exercise.id = index + 1;
    });
    setNewWorkout({ ...newWorkout, exercises: newExercises });
  };

  const saveHandler = () => {
    if (newWorkout.name === "") {
      setAlertMessage("Workout Name is required.");
      handleOpenAlert();
      return;
    }
    if (newWorkout.exercises.length === 0) {
      setAlertMessage("Workout must have at least one exercise.");
      handleOpenAlert();
      return;
    }
    var savedWorkouts = JSON.parse(localStorage.getItem("workouts") || "[]");
    if (newWorkout.id === -1) {
      const newId = savedWorkouts.length + 1;
      const newWorkoutTemplate = {
        id: newId,
        name: newWorkout.name,
        exercises: newWorkout.exercises,
      };
      savedWorkouts.push(newWorkoutTemplate);
    } else {
      const newWorkoutTemplate = {
        id: newWorkout.id,
        name: newWorkout.name,
        exercises: newWorkout.exercises,
      };
      const newWorkoutArray = savedWorkouts.map((workout: any) => {
        if (workout.id === newWorkout.id) {
          return newWorkoutTemplate;
        } else {
          return workout;
        }
      });
      savedWorkouts = newWorkoutArray;
    }
    localStorage.setItem("workouts", JSON.stringify(savedWorkouts));
    states.setEditWorkout(null);
    Router.push("/Workouts");
  };

  const handleOpenAlert = () => {
    setAlertOpen(true);
  };
  const handleCloseAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "700px",
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
            width: "100%",
          }}
        >
          <TextField
            label="Workout Name"
            defaultValue={states.editWorkout ? states.editWorkout.name : ""}
            required
            onChange={(event) => {
              newWorkout.name = event.target.value;
            }}
            sx={{
              width: "98%",
              margin: "0.4rem",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                  borderRadius: "0.6rem",
                },
                "&:hover fieldset": {
                  borderColor: "white  ",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },

              "& .MuiInputLabel-root": {
                fontFamily: "Inter",
                fontSize: "1rem",
                color: "white !important",
              },
              "& .MuiInputBase-input": {
                fontSize: "1.5rem",
                color: "white",
                fontFamily: "Inter",
                letterSpacing: "0.1rem",
                textTransform: "uppercase",
              },
            }}
          />
          <Box>
            {newWorkout.exercises.map((exercise) => {
              return (
                <>
                  <Box
                    key={exercise.id}
                    sx={{
                      color: "black",
                      fontFamily: "Inter",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "#FFFFFC",
                      borderRadius: "0.8rem",
                      padding: "0.5rem",
                      margin: "0.5rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: "85%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.2rem",
                          fontFamily: "Inter",
                        }}
                      >
                        {exercise.id + ". " + exercise.name}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "5px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.9rem",
                            fontFamily: "Inter",
                            marginLeft: "1.5rem",
                          }}
                        >
                          {exercise.muscleGroup}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            marginRight: "2rem",
                          }}
                        >
                          <Button
                            sx={{
                              padding: "0",
                              minWidth: "0.5rem",
                              margin: "0 0.7rem",
                              color: "#E5446D",
                            }}
                          >
                            <RemoveCircleIcon
                              onClick={() => {
                                exercise.sets -= 1;
                                setUpdate(!update);
                              }}
                            />
                          </Button>
                          <Typography
                            sx={{
                              fontSize: "0.9rem",
                              fontFamily: "Inter",
                            }}
                          >
                            Sets: {exercise.sets}
                          </Typography>
                          <Button
                            sx={{
                              padding: "0",
                              minWidth: "0.5rem",
                              margin: "0 0.7rem",
                              color: "#4B6858",
                            }}
                          >
                            <AddCircleIcon
                              onClick={() => {
                                exercise.sets += 1;
                                setUpdate(!update);
                              }}
                            />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                    <Button
                      onClick={() => {
                        deleteHandler(exercise.id);
                      }}
                      sx={{
                        color: "#E5446D",
                        backgroundColor: "white",
                        borderRadius: "0.8rem",
                        minWidth: "0.5rem",
                        marginRight: "0.5rem",
                        ":hover": {
                          backgroundColor: "#E5446D",
                          color: "white",
                        },
                      }}
                    >
                      <CancelIcon
                        sx={{
                          fontSize: "30px",
                        }}
                      />
                    </Button>
                  </Box>
                </>
              );
            })}
          </Box>
          <Autocomplete
            {...defaultProps}
            id="auto-complete"
            autoComplete
            includeInputInList
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Exercise"
                sx={{
                  width: "98%",
                  margin: "0.4rem",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                      borderRadius: "0.6rem",
                    },
                    "&:hover fieldset": {
                      borderColor: "white  ",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },

                  "& .MuiInputLabel-root": {
                    fontFamily: "Inter",
                    fontSize: "1rem",
                    color: "white !important",
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "1rem",
                    color: "white",
                    fontFamily: "Inter",
                  },
                }}
              />
            )}
            onChange={(event: any, newValue: ExerciseOption | null) => {
              setExerciseSelect(newValue);
            }}
          />
          <Button
            onClick={saveHandler}
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
              Save Workout
            </Typography>
          </Button>
          <Snackbar
            open={alertOpen}
            autoHideDuration={3000}
            onClose={handleCloseAlert}
          >
            <Alert
              onClose={handleCloseAlert}
              severity="error"
              sx={{ width: "100%" }}
            >
              {alertMessage}
            </Alert>
          </Snackbar>
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
