import React, { useState, useEffect, memo } from "react";
import {
  CheckCircle2,
  RefreshCw,
  Star,
  ExternalLink,
  Search,
  PenLine,
  Timer,
} from "lucide-react";
import { getLeetCodeUrl, getGfgSearchUrl } from "../utils/helper";

const ProblemRow = memo(
  ({ problem, statuses = [], note, isReviewDue, onToggle, onUpdateNote }) => {
    const [isNoteOpen, setIsNoteOpen] = useState(false);
    const [localNote, setLocalNote] = useState(note || "");

    useEffect(() => {
      setLocalNote(note || "");
    }, [note]);

    const isDone = statuses.includes("done");
    const isRevise = statuses.includes("revise");
    const isHighlight = statuses.includes("highlight");

    // Visual Hierarchy logic
    let rowStyles =
      "hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-all duration-200 border-l-4 ";
    let iconStyles = "text-slate-300 dark:text-slate-600";
    let IconComponent = () => (
      <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600" />
    );

    if (isDone && isRevise) {
      rowStyles += "bg-emerald-50/40 dark:bg-emerald-900/10 border-amber-500";
      iconStyles = "text-amber-500";
      IconComponent = RefreshCw;
    } else if (isDone) {
      rowStyles += "bg-emerald-50/60 dark:bg-emerald-900/10 border-emerald-500";
      iconStyles = "text-emerald-500";
      IconComponent = CheckCircle2;
    } else if (isRevise) {
      rowStyles += "bg-amber-50/60 dark:bg-amber-900/10 border-amber-500";
      iconStyles = "text-amber-500";
      IconComponent = RefreshCw;
    } else if (isHighlight) {
      rowStyles += "bg-purple-50/60 dark:bg-purple-900/10 border-purple-500";
      iconStyles = "text-purple-500";
      IconComponent = Star;
    } else {
      rowStyles += "border-transparent";
    }

    const handleSaveNote = () => {
      onUpdateNote(problem, localNote);
      setIsNoteOpen(false);
    };

    return (
      <div className={`p-5 flex flex-col ${rowStyles}`}>
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className={`mt-0.5 shrink-0 ${iconStyles} transition-colors`}>
              <IconComponent
                size={22}
                className={
                  isDone && !isRevise
                    ? "fill-emerald-100 dark:fill-emerald-900/40"
                    : ""
                }
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className={`text-base font-semibold leading-tight ${isDone ? "text-slate-500 dark:text-slate-400 line-through decoration-emerald-500/30" : "text-slate-700 dark:text-slate-200"}`}
                >
                  {problem}
                </span>
                {isReviewDue && (
                  <span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-500 border border-yellow-200 dark:border-yellow-500/20">
                    <Timer size={12} /> Review Due
                  </span>
                )}
              </div>
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
            <button
              onClick={() => setIsNoteOpen(!isNoteOpen)}
              className={`cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-all ${note ? "bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm"}`}
            >
              <PenLine size={16} /> Note{" "}
              {note && (
                <span className="w-2 h-2 rounded-full bg-blue-500 ml-0.5 animate-pulse" />
              )}
            </button>

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
                className={`cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-all ${statuses.includes(key) ? active : `bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm ${idle}`}`}
              >
                {icon} {label}
              </button>
            ))}
          </div>
        </div>

        {isNoteOpen && (
          <div className="ml-9 xl:ml-10 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/50 animate-in slide-in-from-top-2 fade-in duration-200">
            <textarea
              className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner resize-y min-h-[80px]"
              placeholder="Jot down your 'Aha!' moment, time complexity, or edge cases here..."
              value={localNote}
              onChange={(e) => setLocalNote(e.target.value)}
              autoFocus
            />
            <div className="flex justify-end gap-2 mt-3">
              <button
                onClick={() => {
                  setLocalNote(note || "");
                  setIsNoteOpen(false);
                }}
                className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNote}
                className="px-4 py-1.5 text-xs font-bold bg-indigo-500 text-white rounded-lg shadow-md shadow-indigo-500/20 hover:bg-indigo-600 transition-colors cursor-pointer"
              >
                Save Note
              </button>
            </div>
          </div>
        )}
      </div>
    );
  },
);

export default ProblemRow;
