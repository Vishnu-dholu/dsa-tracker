import React from "react";
import { Filter, ListFilter, ChevronDown } from "lucide-react";

export default function FilterBar({
  statusFilter,
  setStatusFilter,
  topicFilter,
  setTopicFilter,
  allTopicNames,
}) {
  return (
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
            { id: "review_due", label: "Review Due" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setStatusFilter(f.id)}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${statusFilter === f.id ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}
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
  );
}
