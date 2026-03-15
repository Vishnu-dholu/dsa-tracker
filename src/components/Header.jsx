import React from "react";
import {
  Activity,
  FoldVertical,
  UnfoldVertical,
  Sun,
  Moon,
} from "lucide-react";

import myLogo from "../../public/dsa-logo.svg";

export default function Header({
  activeTab,
  setActiveTab,
  completed,
  totalProblems,
  progressPercent,
  toggleAll,
  isDarkMode,
  setIsDarkMode,
}) {
  return (
    <header className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/80 dark:border-slate-700/50 p-8 rounded-3xl shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-900/30 overflow-hidden transition-colors">
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-500/25 to-purple-500/25 dark:from-indigo-500/15 dark:to-purple-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-gradient-to-tr from-pink-500/20 to-orange-400/10 dark:from-pink-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-1.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg shadow-indigo-500/30">
              {/* <Activity size={24} /> */}
              <img
                src={myLogo}
                alt="DSA Mastery Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              DSA Mastery
            </h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400 ml-1 font-medium">
            Pattern Trackers & Analytics
          </p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => toggleAll(true)}
              className="p-2 rounded-full bg-white/70 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200/50 dark:border-slate-700/50 shadow-sm cursor-pointer"
              title="Collapse All"
            >
              <FoldVertical size={20} />
            </button>
            <button
              onClick={() => toggleAll(false)}
              className="p-2 rounded-full bg-white/70 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200/50 dark:border-slate-700/50 shadow-sm cursor-pointer"
              title="Expand All"
            >
              <UnfoldVertical size={20} />
            </button>
            <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 mx-1 self-center" />
            <button
              onClick={() => setIsDarkMode((prev) => !prev)}
              className="p-2 rounded-full bg-white/70 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200/50 dark:border-slate-700/50 shadow-sm cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="flex p-1 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-inner border border-slate-200/60 dark:border-slate-700/50">
            {["30day", "full"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 cursor-pointer ${activeTab === tab ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/25" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}
              >
                {tab === "30day" ? "30-Day Plan" : "Full Sheet"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            Overall Progress ({completed}/{totalProblems})
          </span>
          <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            {progressPercent}%
          </span>
        </div>
        <div className="w-full h-4 bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden shadow-inner border border-slate-200/50 dark:border-slate-700/50">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out relative"
            style={{ width: `${progressPercent}%` }}
          >
            <div className="absolute inset-0 bg-white/20" />
            <div
              className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                animation: "shimmer 2s infinite",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
