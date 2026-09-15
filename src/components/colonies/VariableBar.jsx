import { Package, Wheat, Heart, Handshake, Users } from "lucide-react";

const FIELDS = [
  { key: "supplies", label: "Supplies", icon: Package, color: "#8a6d3b" },
  { key: "food", label: "Food", icon: Wheat, color: "#b07d2b" },
  { key: "health", label: "Health", icon: Heart, color: "#8b2e2e" },
  { key: "trust", label: "Trust", icon: Handshake, color: "#3a5a3a" },
  { key: "population", label: "People", icon: Users, color: "#2b5d7a" },
];

const SCENE_LABELS = {
  welcome: "1 · Welcome",
  geography: "2 · Geography",
  colonialLife: "3 · Colonial Life",
  decision: "4 · Decision",
  consequences: "5 · Consequences",
  reflection: "6 · Reflection",
};

export default function VariableBar({ vars, scene, order }) {
  return (
    <div className="w-full">
      <div className="rounded-xl border border-[#cdb892] bg-[#efe3c8] px-4 sm:px-6 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {FIELDS.map(({ key, label, icon: Icon, color }) => {
            const val = vars[key];
            return (
              <div key={key} className="flex items-center gap-2.5">
                <Icon size={18} style={{ color }} className="flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-1">
                    <span className="font-serif text-[11px] sm:text-xs text-[#6f5a3e] truncate">
                      {label}
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs text-[#3f3526] font-semibold">
                      {val}
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-[#d9c9a3] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${val}%`, backgroundColor: color }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {order.map((s) => (
          <span
            key={s}
            className={`text-[10px] sm:text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full border transition-colors ${
              scene === s
                ? "bg-[#2b2117] text-[#f6efdd] border-[#2b2117]"
                : "bg-transparent text-[#8a6d3b] border-[#cdb892]"
            }`}
          >
            {SCENE_LABELS[s]}
          </span>
        ))}
      </div>
    </div>
  );
}