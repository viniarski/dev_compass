import type { TabId } from "../data/types";

type Tab = { id: TabId; label: string; subtitle: string };

type TabChipsProps = {
  tabs: Tab[];
  active: TabId;
  onChange: (id: TabId) => void;
};

export function TabChips({ tabs, active, onChange }: TabChipsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab) => (
        <button
          key={`${tab.id}-chip`}
          onClick={() => onChange(tab.id)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            active === tab.id
              ? "border-teal-300 bg-teal-300 text-slate-900"
              : "border-white/10 bg-white/5 text-white/70 hover:border-white/30"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
