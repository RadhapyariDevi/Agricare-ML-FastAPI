import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HistoryPagination({ pagination, onPrev, onNext }) {
  if (!pagination || pagination.totalPages <= 1) return null;

  return (
    <div className="flex justify-between items-center py-12">
      <button
        onClick={onPrev}
        disabled={!pagination.hasPrevPage}
        className="flex items-center gap-1 px-6 py-3 rounded-xl font-semibold text-muted disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ArrowLeft size={14} />
        Previous
      </button>
      <p className="text-muted text-lg">
        Page {pagination.currentPage} of {pagination.totalPages}
      </p>
      <button
        onClick={onNext}
        disabled={!pagination.hasNextPage}
        className="flex items-center gap-1 px-6 py-3 rounded-xl font-semibold text-muted disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
        <ArrowRight size={14} />
      </button>
    </div>
  );
}