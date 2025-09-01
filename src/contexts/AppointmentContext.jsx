import React, { createContext, useContext, useState } from "react";

const AppointmentContext = createContext();

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error(
      "useAppointment must be used within an AppointmentProvider"
    );
  }
  return context;
};

export const AppointmentProvider = ({ children }) => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const openAppointment = () => setIsAppointmentOpen(true);
  const closeAppointment = () => setIsAppointmentOpen(false);

  return (
    <AppointmentContext.Provider
      value={{
        isAppointmentOpen,
        openAppointment,
        closeAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
