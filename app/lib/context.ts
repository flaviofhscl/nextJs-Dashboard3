import React, { createContext, useContext, useState, ReactNode } from "react";


// Define the context
export const AppStateContext = createContext({});

export function AppContextProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = React.useState({});

   
}

// Define a hook for easy context usage
export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppContextProvider");
  }
  return context;
}