const FILTERS = [
  { key: "all", label: "All" },
  { key: "issues", label: "Issues Found" },
  { key: "healthy", label: "Healthy" },
];

export default function HistoryFilters({ statusFilter, onChange }) {
  return (
    <div className="flex gap-3 mb-8">
      {FILTERS.map((f) => (
        <button
          key={f.key}
          onClick={() => onChange(f.key)}
          className={`px-5 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition hover:cursor-pointer ${
            statusFilter === f.key
              ? "bg-[#e9e9dd] text-foreground"
              : "bg-background border border-input-border text-foreground"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}