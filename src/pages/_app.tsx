import "@/styles/globals.css";
import "../styles/bodyMap.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";

import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [editWorkout, setEditWorkout] = useState<any>(null);
  const [startWorkout, setStartWorkout] = useState<any>(null);

  return (
    <Provider store={store}>
      <Component
        {...pageProps}
        editWorkout={editWorkout}
        setEditWorkout={setEditWorkout}
        startWorkout={startWorkout}
        setStartWorkout={setStartWorkout}
      />
    </Provider>
  );
}
