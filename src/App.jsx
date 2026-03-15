import React, { useState, useEffect, useCallback, useMemo } from "react";
import { thirtyDaySheet, fullSheet } from "./data";
import { ChevronDown } from "lucide-react";

// Components
import BackgroundBlobs from "./components/BackgroundBlobs";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ActivityHeatmap from "./components/ActivityHeatmap";
import ProblemRow from "./components/ProblemRow";

export default function App() {
  const [activeTab, setActiveTab] = useState("30day");
  const [progress, setProgress] = useState({});
  const [notes, setNotes] = useState({});
  const [completionDates, setCompletionDates] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [collapsedTopics, setCollapsedTopics] = useState({});
  const [collapsedPatterns, setCollapsedPatterns] = useState({});
  const [statusFilter, setStatusFilter] = useState("all");
  const [topicFilter, setTopicFilter] = useState("all");

  // Load from Storage & Migrate Legacy Data
  useEffect(() => {
    const savedProgress = localStorage.getItem("modernDsaProgress");
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress);
      let needsMigration = false;

      // MIGRATION: Convert old string statuses (e.g. "done") to arrays (e.g. ["done"])
      Object.keys(parsed).forEach((key) => {
        if (typeof parsed[key] === "string") {
          parsed[key] = [parsed[key]];
          needsMigration = true;
        }
      });

      setProgress(parsed);
      if (needsMigration) {
        localStorage.setItem("modernDsaProgress", JSON.stringify(parsed));
      }
    }

    const savedNotes = localStorage.getItem("modernDsaNotes");
    if (savedNotes) setNotes(JSON.parse(savedNotes));

    const savedDates = localStorage.getItem("modernDsaDates");
    if (savedDates) setCompletionDates(JSON.parse(savedDates));

    const savedTheme = localStorage.getItem("dsaTheme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    }
  }, []);

  // Save Progress, Notes, & Dates
  useEffect(() => {
    localStorage.setItem("modernDsaProgress", JSON.stringify(progress));
  }, [progress]);
  useEffect(() => {
    localStorage.setItem("modernDsaNotes", JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    localStorage.setItem("modernDsaDates", JSON.stringify(completionDates));
  }, [completionDates]);

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

  // Callbacks for Multi-Select Status
  const toggleStatus = useCallback((problem, statusKey) => {
    setProgress((prev) => {
      const currentStatuses = prev[problem] || [];
      let newStatuses;

      // Toggle the specific status inside the array
      if (currentStatuses.includes(statusKey)) {
        newStatuses = currentStatuses.filter((s) => s !== statusKey);
      } else {
        newStatuses = [...currentStatuses, statusKey];
      }

      // Heatmap & Date tracking (Only triggers when "done" is toggled)
      if (statusKey === "done") {
        setCompletionDates((prevDates) => {
          const newDates = { ...prevDates };
          if (
            newStatuses.includes("done") &&
            !currentStatuses.includes("done")
          ) {
            newDates[problem] = new Date().toISOString();
          } else if (
            !newStatuses.includes("done") &&
            currentStatuses.includes("done")
          ) {
            delete newDates[problem];
          }
          return newDates;
        });
      }

      // Cleanup empty arrays
      if (newStatuses.length === 0) {
        const nextProgress = { ...prev };
        delete nextProgress[problem];
        return nextProgress;
      }

      return { ...prev, [problem]: newStatuses };
    });
  }, []);

  const updateNote = useCallback((problem, text) => {
    setNotes((prev) => {
      const newNotes = { ...prev };
      if (!text || text.trim() === "") delete newNotes[problem];
      else newNotes[problem] = text;
      return newNotes;
    });
  }, []);

  const toggleTopicCollapse = useCallback((topicName) => {
    setCollapsedTopics((prev) => ({ ...prev, [topicName]: !prev[topicName] }));
  }, []);

  const togglePatternCollapse = useCallback((patternName) => {
    setCollapsedPatterns((prev) => ({
      ...prev,
      [patternName]: !prev[patternName],
    }));
  }, []);

  const currentData = activeTab === "30day" ? thirtyDaySheet : fullSheet;
  const allTopicNames = useMemo(
    () => currentData.map((t) => t.topic),
    [currentData],
  );

  const toggleAll = useCallback(
    (collapse) => {
      const newTopicsState = {};
      const newPatternsState = {};
      if (collapse) {
        currentData.forEach((t) => {
          newTopicsState[t.topic] = true;
          t.patterns.forEach((p) => {
            newPatternsState[p.pattern] = true;
          });
        });
      }
      setCollapsedTopics(newTopicsState);
      setCollapsedPatterns(newPatternsState);
    },
    [currentData],
  );

  // Calculations looking for 'done' inside the array
  const { totalProblems, completed } = useMemo(() => {
    let total = 0,
      done = 0;
    currentData.forEach((topic) => {
      topic.patterns.forEach((pat) => {
        total += pat.problems.length;
        done += pat.problems.filter((p) =>
          progress[p]?.includes("done"),
        ).length;
      });
    });
    return { totalProblems: total, completed: done };
  }, [currentData, progress]);

  const progressPercent =
    totalProblems === 0 ? 0 : Math.round((completed / totalProblems) * 100);

  const isReviewDue = useCallback(
    (problem) => {
      if (!progress[problem]?.includes("done") || !completionDates[problem])
        return false;
      const daysElapsed =
        (Date.now() - new Date(completionDates[problem]).getTime()) /
        (1000 * 3600 * 24);
      return daysElapsed > 7;
    },
    [progress, completionDates],
  );

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 py-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <BackgroundBlobs />

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          completed={completed}
          totalProblems={totalProblems}
          progressPercent={progressPercent}
          toggleAll={toggleAll}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />

        <ActivityHeatmap completionDates={completionDates} />

        <FilterBar
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          topicFilter={topicFilter}
          setTopicFilter={setTopicFilter}
          allTopicNames={allTopicNames}
        />

        {/* --- DYNAMIC LIST --- */}
        <div className="space-y-6">
          {currentData.map((topicData, tIdx) => {
            if (topicFilter !== "all" && topicData.topic !== topicFilter)
              return null;

            const isCollapsed = collapsedTopics[topicData.topic];
            const topicTotal = topicData.patterns.reduce(
              (acc, pat) => acc + pat.problems.length,
              0,
            );
            const topicDone = topicData.patterns.reduce(
              (acc, pat) =>
                acc +
                pat.problems.filter((p) => progress[p]?.includes("done"))
                  .length,
              0,
            );
            const topicPercent =
              topicTotal === 0 ? 0 : Math.round((topicDone / topicTotal) * 100);

            // Filters logic updated for array check
            const filteredPatterns = topicData.patterns
              .map((category) => {
                const filteredProblems = category.problems.filter((problem) => {
                  const statuses = progress[problem] || [];
                  if (statusFilter === "hide_done")
                    return !statuses.includes("done");
                  if (statusFilter === "revise")
                    return statuses.includes("revise");
                  if (statusFilter === "highlight")
                    return statuses.includes("highlight");
                  if (statusFilter === "review_due")
                    return isReviewDue(problem);
                  return true;
                });
                return { ...category, filteredProblems };
              })
              .filter((category) => category.filteredProblems.length > 0);

            if (filteredPatterns.length === 0) return null;

            return (
              // ... THE REST OF YOUR RENDER LOGIC STAYS THE SAME ...
              // (Keep the existing return statement mapping over Topics/Patterns from the previous version)
              // Just make sure to pass `statuses={progress[problem] || []}` to ProblemRow instead of `status`
              <div key={tIdx} className="space-y-4">
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

                <div
                  className={`space-y-6 transition-all duration-300 origin-top ${isCollapsed ? "hidden opacity-0" : "block opacity-100"}`}
                >
                  {filteredPatterns.map((category, cIdx) => {
                    const categoryTotalActual = category.problems.length;
                    const categoryDoneActual = category.problems.filter((p) =>
                      progress[p]?.includes("done"),
                    ).length;
                    const categoryPercent = Math.round(
                      (categoryDoneActual / categoryTotalActual) * 100,
                    );
                    const isPatternCollapsed =
                      collapsedPatterns[category.pattern];

                    return (
                      <section
                        key={cIdx}
                        className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-md border border-white/70 dark:border-slate-700/50 overflow-hidden transition-colors ml-4 sm:ml-8"
                      >
                        <div
                          className="bg-slate-800/90 dark:bg-slate-950/90 backdrop-blur-sm px-6 py-4 border-b border-slate-700/50 flex justify-between items-center relative overflow-hidden cursor-pointer hover:bg-slate-700/90 dark:hover:bg-slate-900/90 transition-colors group"
                          onClick={() =>
                            togglePatternCollapse(category.pattern)
                          }
                        >
                          <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500/15 to-transparent transition-all duration-500"
                            style={{ width: `${categoryPercent}%` }}
                          />
                          <div className="flex items-center gap-3 relative z-10">
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-300 ${isPatternCollapsed ? "-rotate-90" : "rotate-0"}`}
                            />
                            <h3 className="text-lg font-bold text-white group-hover:text-emerald-50 transition-colors">
                              {category.pattern}
                            </h3>
                          </div>
                          <span className="text-xs font-bold px-3 py-1.5 bg-slate-900/40 text-emerald-400 rounded-full relative z-10 shadow-inner border border-emerald-500/20">
                            {categoryDoneActual} / {categoryTotalActual} Done
                          </span>
                        </div>

                        <div
                          className={`transition-all duration-300 origin-top ${isPatternCollapsed ? "hidden opacity-0 h-0" : "block opacity-100 h-auto"}`}
                        >
                          <div className="divide-y divide-slate-100/80 dark:divide-slate-800/60">
                            {category.filteredProblems.map((problem) => (
                              <ProblemRow
                                key={problem}
                                problem={problem}
                                statuses={progress[problem] || []} // <-- CHANGED TO STATUSES
                                note={notes[problem]}
                                isReviewDue={isReviewDue(problem)}
                                onToggle={toggleStatus}
                                onUpdateNote={updateNote}
                              />
                            ))}
                          </div>
                        </div>
                      </section>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
