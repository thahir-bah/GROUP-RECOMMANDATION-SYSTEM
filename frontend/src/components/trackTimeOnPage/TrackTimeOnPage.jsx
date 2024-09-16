import { useEffect } from 'react';
import ReactGA from "react-ga4";


export const TrackTimeOnPage = () => {
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeSpent = Date.now() - startTime;
      ReactGA.event({
        category: "User",
        action: "Time Spent",
        label: "Page XYZ",
        value: Math.round(timeSpent / 1000) // Time in seconds
      });
    };
  }, []);

  return null;

  return null;
};
