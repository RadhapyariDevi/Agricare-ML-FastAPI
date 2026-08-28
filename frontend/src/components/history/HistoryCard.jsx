import { Trash2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HistoryCard({ item, onDeleteClick }) {
  const router = useRouter();

  return (
    <div className="bg-card rounded-xl shadow-sm p-3 flex gap-6 h-40">
      <div className="relative w-[140px] h-full rounded-lg overflow-hidden shrink-0">
        <img
          src={item.imageUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span
          className={`absolute top-1 right-1 backdrop-blur-sm bg-white/80 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded ${
            item.isHealthy ? "text-primary" : "text-danger"
          }`}
        >
          {item.isHealthy ? "Healthy" : item.condition}
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-between py-1 min-w-0">
        <div className="flex flex-col gap-1">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-foreground truncate">
              {item.isHealthy ? "Healthy Leaf" : item.condition}
            </h3>
            <button
              onClick={() => onDeleteClick(item._id)}
              className="p-1 text-muted-foreground hover:text-danger transition shrink-0 hover:cursor-pointer"
              aria-label="Delete this record"
            >
              <Trash2 size={16} />
            </button>
          </div>
          <p className="text-muted text-sm">
            {new Date(item.createdAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="text-muted text-sm line-clamp-2">{item.cause}</p>
        </div>

        <button
          onClick={() => router.push(`/diagnosis/${item._id}`)}
          className="text-primary font-semibold text-sm flex items-center gap-1 w-fit hover:cursor-pointer"
        >
          View full report
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}