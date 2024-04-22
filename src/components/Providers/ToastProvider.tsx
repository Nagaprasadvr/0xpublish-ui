"use client";
import { Toaster } from "react-hot-toast";

export const ToastProviderUI = () => {
  return (
    <Toaster
      position="bottom-left"
      toastOptions={{
        style: {
          color: "#87cefa",
          backgroundColor: "black",
          border: "2px solid #87cefa",
          width: "fit-content",
          fontFamily: '"BedSteadRegular", sans-serif',
          fontWeight: "600",
          fontSize: "15px",
          zIndex: 999999,
        },
      }}
    ></Toaster>
  );
};
