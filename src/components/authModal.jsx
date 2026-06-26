"use client";
import React from "react";
import { useRouter } from "next/navigation";

const AuthModal = ({ isOpen, onClose }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleNavigate = (path) => {
    onClose();
    router.push(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#0b1936] text-white rounded-3xl p-6 md:p-8 border border-slate-800/50 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors cursor-pointer bg-white/5 hover:bg-white/10 p-1.5 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Gateway UI Content */}
        <div className="flex flex-col items-center text-center py-4">
          <div className="w-16 h-16 bg-blue-950/50 border border-blue-900/40 rounded-full flex items-center justify-center mb-5 shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold mb-3 tracking-wide">
            Authentication Required
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
            If you want to list your own study room, please log in or register
            an account first.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full px-2">
            <button
              onClick={() => handleNavigate("/login")}
              className="w-full py-3.5 bg-[#00684a] hover:bg-[#00523a] text-white font-semibold rounded-xl transition-all text-sm shadow-md cursor-pointer">
              Log In
            </button>

            <button
              onClick={() => handleNavigate("/register")}
              className="w-full py-3.5 bg-[#1b253b] hover:bg-[#243250] text-white font-semibold rounded-xl border border-slate-700 transition-all text-sm cursor-pointer">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
