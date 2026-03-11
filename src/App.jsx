import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { thirtyDaySheet, fullSheet } from "./data";
import {
  CheckCircle2,
  RefreshCw,
  Star,
  ExternalLink,
  Activity,
  Moon,
  Sun,
  Search,
  ChevronDown,
  FoldVertical,
  UnfoldVertical,
  Filter,
  ListFilter,
} from "lucide-react";

// ==========================================
// 1. UTILITIES & HELPERS
// ==========================================
const getLeetCodeUrl = (problemString) => {
  const name = problemString.replace(/^\d+\.\s*/, "").trim();
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `https://leetcode.com/problems/${slug}/`;
};

const getGfgSearchUrl = (problemString) => {
  const name = problemString.replace(/^\d+\.\s*/, "").trim();
  return `https://www.google.com/search?q=site%3Ageeksforgeeks.org%2Fproblems+${encodeURIComponent(name)}`;
};

// ==========================================
// 2. PURE UI COMPONENTS (Static / No State)
// ==========================================
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

// ==========================================
// 3. MEMOIZED LIST COMPONENTS
// ==========================================
// Using React.memo ensures this row ONLY re-renders if its specific status changes
const ProblemRow = memo(({ problem, status, onToggle }) => {
  let rowStyles =
    "hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-all duration-200";
  let iconStyles = "text-slate-300 dark:text-slate-600";

  if (status === "done") {
    rowStyles =
      "bg-emerald-50/60 dark:bg-emerald-900/10 border-l-4 border-emerald-500";
    iconStyles = "text-emerald-500";
  } else if (status === "revise") {
    rowStyles =
      "bg-amber-50/60 dark:bg-amber-900/10 border-l-4 border-amber-500";
    iconStyles = "text-amber-500";
  } else if (status === "highlight") {
    rowStyles =
      "bg-purple-50/60 dark:bg-purple-900/10 border-l-4 border-purple-500";
    iconStyles = "text-purple-500";
  } else {
    rowStyles += " border-l-4 border-transparent";
  }

  return (
    <div
      className={`p-5 flex flex-col xl:flex-row xl:items-center justify-between gap-5 ${rowStyles}`}
    >
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <div className={`mt-0.5 shrink-0 ${iconStyles} transition-colors`}>
          {status === "done" ? (
            <CheckCircle2
              size={22}
              className="fill-emerald-100 dark:fill-emerald-900/40"
            />
          ) : status === "revise" ? (
            <RefreshCw size={22} />
          ) : status === "highlight" ? (
            <Star
              size={22}
              className="fill-purple-100 dark:fill-purple-900/40"
            />
          ) : (
            <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600" />
          )}
        </div>
        <div className="flex flex-col gap-2.5">
          <span
            className={`text-base font-semibold leading-tight ${status === "done" ? "text-slate-500 dark:text-slate-400 line-through decoration-emerald-500/30" : "text-slate-700 dark:text-slate-200"}`}
          >
            {problem}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={getLeetCodeUrl(problem)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-colors text-xs font-bold border border-orange-200 dark:border-orange-500/20 shadow-sm"
            >
              <ExternalLink size={12} /> LeetCode
            </a>
            <a
              href={getGfgSearchUrl(problem)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-500/20 transition-colors text-xs font-bold border border-green-200 dark:border-green-500/20 shadow-sm"
            >
              <Search size={12} /> GFG
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 ml-9 xl:ml-0">
        {[
          {
            key: "done",
            label: "Done",
            icon: <CheckCircle2 size={16} />,
            active:
              "bg-emerald-500 text-white shadow-md shadow-emerald-500/20 ring-2 ring-emerald-500 ring-offset-1 dark:ring-offset-slate-900",
            idle: "hover:border-emerald-400 dark:hover:border-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400",
          },
          {
            key: "revise",
            label: "Revise",
            icon: <RefreshCw size={16} />,
            active:
              "bg-amber-500 text-white shadow-md shadow-amber-500/20 ring-2 ring-amber-500 ring-offset-1 dark:ring-offset-slate-900",
            idle: "hover:border-amber-400 dark:hover:border-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-600 dark:hover:text-amber-400",
          },
          {
            key: "highlight",
            label: "Highlight",
            icon: <Star size={16} />,
            active:
              "bg-purple-500 text-white shadow-md shadow-purple-500/20 ring-2 ring-purple-500 ring-offset-1 dark:ring-offset-slate-900",
            idle: "hover:border-purple-400 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400",
          },
        ].map(({ key, label, icon, active, idle }) => (
          <button
            key={key}
            onClick={() => onToggle(problem, key)}
            className={`cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-all ${status === key ? active : `bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm ${idle}`}`}
          >
            {icon} {label}
          </button>
        ))}
      </div>
    </div>
  );
});

// ==========================================
// 4. MAIN APP COMPONENT
// ==========================================
export default function App() {
  // State
  const [activeTab, setActiveTab] = useState("30day");
  const [progress, setProgress] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [collapsedTopics, setCollapsedTopics] = useState({});
  const [statusFilter, setStatusFilter] = useState("all");
  const [topicFilter, setTopicFilter] = useState("all");

  // Load from Storage
  useEffect(() => {
    const savedProgress = localStorage.getItem("modernDsaProgress");
    if (savedProgress) setProgress(JSON.parse(savedProgress));
    const savedTheme = localStorage.getItem("dsaTheme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    }
  }, []);

  // Save Progress
  useEffect(() => {
    localStorage.setItem("modernDsaProgress", JSON.stringify(progress));
  }, [progress]);

  // Apply Theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dsaTheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dsaTheme", "light");
    }
  }, [isDarkMode]);

  // Callbacks (Memoized to prevent children from re-rendering)
  const toggleStatus = useCallback((problem, status) => {
    setProgress((prev) => ({
      ...prev,
      [problem]: prev[problem] === status ? null : status,
    }));
  }, []);

  const toggleTopicCollapse = useCallback((topicName) => {
    setCollapsedTopics((prev) => ({ ...prev, [topicName]: !prev[topicName] }));
  }, []);

  const currentData = activeTab === "30day" ? thirtyDaySheet : fullSheet;
  const allTopicNames = useMemo(
    () => currentData.map((t) => t.topic),
    [currentData],
  );

  const toggleAllTopics = useCallback(
    (collapse) => {
      const newState = {};
      if (collapse) currentData.forEach((t) => (newState[t.topic] = true));
      setCollapsedTopics(newState);
    },
    [currentData],
  );

  // Memoized Global Calculations
  const { totalProblems, completed } = useMemo(() => {
    let total = 0,
      done = 0;
    currentData.forEach((topic) => {
      topic.patterns.forEach((pat) => {
        total += pat.problems.length;
        done += pat.problems.filter((p) => progress[p] === "done").length;
      });
    });
    return { totalProblems: total, completed: done };
  }, [currentData, progress]);

  const progressPercent =
    totalProblems === 0 ? 0 : Math.round((completed / totalProblems) * 100);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 py-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <BackgroundBlobs />

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        {/* --- HEADER COMPONENT --- */}
        <header className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/80 dark:border-slate-700/50 p-8 rounded-3xl shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-900/30 overflow-hidden transition-colors">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-500/25 to-purple-500/25 dark:from-indigo-500/15 dark:to-purple-500/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-gradient-to-tr from-pink-500/20 to-orange-400/10 dark:from-pink-600/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg shadow-indigo-500/30">
                  <Activity size={24} />
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
                  onClick={() => toggleAllTopics(true)}
                  className="p-2 rounded-full bg-white/70 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200/50 dark:border-slate-700/50 shadow-sm cursor-pointer"
                  title="Collapse All"
                >
                  <FoldVertical size={20} />
                </button>
                <button
                  onClick={() => toggleAllTopics(false)}
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

        {/* --- FILTER CONTROL BAR --- */}
        <div className="sticky top-4 z-40 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/80 dark:border-slate-700/50 p-4 rounded-2xl shadow-lg shadow-slate-200/20 dark:shadow-slate-900/50 flex flex-col sm:flex-row gap-4 justify-between items-center transition-colors">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Filter
              size={18}
              className={`hidden sm:block transition-colors ${statusFilter !== "all" || topicFilter !== "all" ? "text-indigo-500" : "text-slate-400"}`}
            />
            <div className="flex p-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-xl w-full sm:w-auto overflow-x-auto hide-scrollbar">
              {[
                { id: "all", label: "All" },
                { id: "hide_done", label: "Hide Done" },
                { id: "revise", label: "Needs Revise" },
                { id: "highlight", label: "Highlighted" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setStatusFilter(f.id)}
                  className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${statusFilter === f.id ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <ListFilter size={18} className="text-slate-400 hidden sm:block" />
            <div className="relative w-full sm:w-64">
              <select
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
                className="w-full appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-xl px-4 py-2.5 pr-8 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm cursor-pointer"
              >
                <option value="all">All Topics</option>
                {allTopicNames.map((name, i) => (
                  <option key={i} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* --- DYNAMIC LIST --- */}
        <div className="space-y-6">
          {currentData.map((topicData, tIdx) => {
            // Filter by Topic
            if (topicFilter !== "all" && topicData.topic !== topicFilter)
              return null;

            const isCollapsed = collapsedTopics[topicData.topic];
            const topicTotal = topicData.patterns.reduce(
              (acc, pat) => acc + pat.problems.length,
              0,
            );
            const topicDone = topicData.patterns.reduce(
              (acc, pat) =>
                acc + pat.problems.filter((p) => progress[p] === "done").length,
              0,
            );
            const topicPercent =
              topicTotal === 0 ? 0 : Math.round((topicDone / topicTotal) * 100);

            // Filter by Status
            const filteredPatterns = topicData.patterns
              .map((category) => {
                const filteredProblems = category.problems.filter((problem) => {
                  const status = progress[problem];
                  if (statusFilter === "hide_done") return status !== "done";
                  if (statusFilter === "revise") return status === "revise";
                  if (statusFilter === "highlight")
                    return status === "highlight";
                  return true;
                });
                return { ...category, filteredProblems };
              })
              .filter((category) => category.filteredProblems.length > 0);

            if (filteredPatterns.length === 0) return null;

            return (
              <div key={tIdx} className="space-y-4">
                {/* Topic Header Card */}
                <div
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/80 dark:border-slate-700/50 shadow-md shadow-slate-200/50 dark:shadow-slate-900/50 cursor-pointer hover:border-indigo-300/80 dark:hover:border-indigo-700/80 hover:shadow-indigo-100 dark:hover:shadow-indigo-900/20 transition-all duration-200"
                  onClick={() => toggleTopicCollapse(topicData.topic)}
                >
                  <div className="flex items-center gap-4 mb-3 sm:mb-0">
                    <div className="p-2 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-slate-500 dark:text-slate-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? "-rotate-90" : "rotate-0"}`}
                      />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                      {topicData.topic}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4 pl-12 sm:pl-0">
                    <div className="flex-1 sm:w-32 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 transition-all duration-500 rounded-full"
                        style={{ width: `${topicPercent}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400 min-w-[3rem] text-right">
                      {topicPercent}%
                    </span>
                  </div>
                </div>

                {/* Collapsed Patterns Wrapper */}
                <div
                  className={`space-y-6 transition-all duration-300 origin-top ${isCollapsed ? "hidden opacity-0" : "block opacity-100"}`}
                >
                  {filteredPatterns.map((category, cIdx) => {
                    const categoryTotalActual = category.problems.length;
                    const categoryDoneActual = category.problems.filter(
                      (p) => progress[p] === "done",
                    ).length;
                    const categoryPercent = Math.round(
                      (categoryDoneActual / categoryTotalActual) * 100,
                    );

                    return (
                      <section
                        key={cIdx}
                        className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-md border border-white/70 dark:border-slate-700/50 overflow-hidden transition-colors ml-4 sm:ml-8"
                      >
                        <div className="bg-slate-800/90 dark:bg-slate-950/90 backdrop-blur-sm px-6 py-4 border-b border-slate-700/50 flex justify-between items-center relative overflow-hidden">
                          <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500/15 to-transparent transition-all duration-500"
                            style={{ width: `${categoryPercent}%` }}
                          />
                          <h3 className="text-lg font-bold text-white relative z-10">
                            {category.pattern}
                          </h3>
                          <span className="text-xs font-bold px-3 py-1.5 bg-slate-700/80 text-emerald-400 rounded-full relative z-10 shadow-inner border border-emerald-500/20">
                            {categoryDoneActual} / {categoryTotalActual} Done
                          </span>
                        </div>

                        <div className="divide-y divide-slate-100/80 dark:divide-slate-800/60">
                          {category.filteredProblems.map((problem) => (
                            <ProblemRow
                              key={problem}
                              problem={problem}
                              status={progress[problem]}
                              onToggle={toggleStatus}
                            />
                          ))}
                        </div>
                      </section>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Empty State / No Results Found */}
          {currentData.every((topicData) => {
            if (topicFilter !== "all" && topicData.topic !== topicFilter)
              return true;
            return topicData.patterns.every((category) =>
              category.problems.every((problem) => {
                const status = progress[problem];
                if (statusFilter === "hide_done") return status === "done";
                if (statusFilter === "revise") return status !== "revise";
                if (statusFilter === "highlight") return status !== "highlight";
                return false;
              }),
            );
          }) && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 shadow-sm border border-slate-200 dark:border-slate-700">
                <Filter size={28} className="text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-600 dark:text-slate-300 mb-1">
                No problems match
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">
                Try changing your filters
              </p>
              <button
                onClick={() => {
                  setStatusFilter("all");
                  setTopicFilter("all");
                }}
                className="px-4 py-2 rounded-xl bg-indigo-500 text-white text-sm font-bold hover:bg-indigo-600 transition-colors shadow-md shadow-indigo-500/20 cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
