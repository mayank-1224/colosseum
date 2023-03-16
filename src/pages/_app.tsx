import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [editWorkout, setEditWorkout] = useState<any>(null);
  const [startWorkout, setStartWorkout] = useState<any>(null);

  useEffect(() => {
    if (!localStorage.getItem("userStats")) {
      localStorage.setItem(
        "userStats",
        JSON.stringify({
          age: 0,
          gender: "",
          weight: 0,
          heightFT: 0,
          heightIN: 0,
          bmi: 0,
          bodyFat: 0,
          bicep: 0,
          chest: 0,
          waist: 0,
          neck: 0,
          activityLevel: "",
          weightHistory: [
            {
              date: new Date(),
              weight: 0,
            },
          ],
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Component
      {...pageProps}
      editWorkout={editWorkout}
      setEditWorkout={setEditWorkout}
      startWorkout={startWorkout}
      setStartWorkout={setStartWorkout}
    />
  );
}

interface UserStatsTemplate {
  age: number;
  gender: string;
  weight: number | null;
  heightFT: number | null;
  heightIN: number | null;
  bmi: number | null;
  bodyFat: number | null;
  bicep: number | null;
  chest: number | null;
  waist: number | null;
  neck: number | null;
  activityLevel: string;
  weightHistory: [
    {
      date: Date;
      weight: number;
    }
  ];
}
