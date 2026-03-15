import React, { memo } from "react";

const BackgroundBlobs = memo(() => (
  <div
    className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    aria-hidden="true"
  >
    <div className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob pointer-events-none w-[600px] h-[600px] bg-indigo-400 dark:bg-indigo-600 top-[-10%] left-[-10%]" />
    <div className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob pointer-events-none w-[500px] h-[500px] bg-purple-400 dark:bg-purple-600 top-[20%] right-[-8%] animation-delay-2000" />
    <div className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob pointer-events-none w-[450px] h-[450px] bg-pink-300 dark:bg-pink-600 bottom-[5%] left-[20%] animation-delay-4000" />
    <div className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob pointer-events-none w-[350px] h-[350px] bg-sky-300 dark:bg-sky-600 bottom-[25%] right-[10%] animation-delay-2000" />
    <div
      className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px",
      }}
    />
  </div>
));

export default BackgroundBlobs;
