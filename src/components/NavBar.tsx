import { useState } from "react";
import { Box, Button, Stack, Paper } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Person2Icon from "@mui/icons-material/Person2";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import BarChartIcon from "@mui/icons-material/BarChart";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Router from "next/router";

const NavBar = () => {
  const [value, setValue] = useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    switch (newValue) {
      case "exercises":
        Router.push("/AllExercises");
        break;
      case "nutrition":
        Router.push("/nutrition");
        break;
      case "workout":
        Router.push("/Workouts");
        break;
      case "statistics":
        Router.push("/Statistics");
        break;
      case "account":
        Router.push("/Measurements");
        break;
    }
    console.log(newValue);
  };
  return (
    <Paper
      sx={{
        bottom: 0,
        width: "100%",
        zIndex: 1000,
      }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Exercises"
          value="exercises"
          icon={<AccessibilityIcon />}
        />
        <BottomNavigationAction
          label="Nutrition"
          value="nutrition"
          icon={<RestaurantIcon />}
        />
        <BottomNavigationAction
          label="Workout"
          value="workout"
          icon={<FitnessCenterIcon />}
        />
        <BottomNavigationAction
          label="Statistics"
          value="statistics"
          icon={<BarChartIcon />}
        />
        <BottomNavigationAction
          label="Account"
          value="account"
          icon={<Person2Icon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default NavBar;
