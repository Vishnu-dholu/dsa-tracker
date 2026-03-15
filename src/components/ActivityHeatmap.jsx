import React, { useMemo, memo } from "react";
import { Flame } from "lucide-react";

const ActivityHeatmap = memo(({ completionDates }) => {
  const countsByDate = useMemo(() => {
    const counts = {};
    Object.values(completionDates).forEach((isoString) => {
      const date = isoString.split("T")[0];
      counts[date] = (counts[date] || 0) + 1;
    });
    return counts;
  }, [completionDates]);

  const last60Days = useMemo(() => {
    const days = [];
    const today = new Date();
    for (let i = 59; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      days.push(d.toISOString().split("T")[0]);
    }
    return days;
  }, []);

  const getColor = (count) => {
    if (count === 0) return "bg-slate-100 dark:bg-slate-800";
    if (count <= 2) return "bg-emerald-300 dark:bg-emerald-900/60";
    if (count <= 4) return "bg-emerald-400 dark:bg-emerald-700";
    return "bg-emerald-500 dark:bg-emerald-500 shadow-[0_0_8px_rgb(16,185,129,0.5)]";
  };

  return (
    <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/80 dark:border-slate-700/50 p-6 rounded-3xl shadow-md shadow-slate-200/20 dark:shadow-slate-900/50 mb-8 transition-colors">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="text-orange-500" size={20} />
        <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
          Consistency Tracker
        </h3>
      </div>
      <div className="flex flex-wrap gap-1.5 justify-end sm:justify-start">
        {last60Days.map((date) => {
          const count = countsByDate[date] || 0;
          return (
            <div
              key={date}
              title={`${date}: ${count} problems solved`}
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm transition-colors duration-300 ${getColor(count)}`}
            />
          );
        })}
      </div>
    </div>
  );
});

export default ActivityHeatmap;
