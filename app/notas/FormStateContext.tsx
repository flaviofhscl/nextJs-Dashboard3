import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context
const initialState = {}; // Define the initialState variable

export const FormStateContext = createContext([initialState, () => {}]);

// Define the provider
export function FormContextProvider({ children }: { children: ReactNode }) {
 // In your provider component
const [state, setState] = useState(initialState);

  return (
    <FormStateContext.Provider value={[state, setState]}>
      {children}
    </FormStateContext.Provider>
  );
}

// Define a hook for easy context usage
export function useFormState() {
    const context = useContext(FormStateContext);
    if (!context) {
      throw new Error("useFormState must be used within the FormContextProvider");
    }
    return context;
  }