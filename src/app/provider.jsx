"use client";


import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthContext";

export default function Providers({ children }) {
  return (
    
      <AuthProvider>
        {children}
        <Toaster position="top-right" />
      </AuthProvider>
   
  );
}