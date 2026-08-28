"use client";

import { useEffect, useState } from "react";
import { getDiagnosisHistory, deleteDiagnosis } from "@/services/diagnosis.service";
import HistoryHeader from "@/components/history/HistoryHeader";
import HistoryFilters from "@/components/history/HistoryFilters";
import HistoryCard from "@/components/history/HistoryCard";
import DeleteConfirmModal from "@/components/history/DeleteConfirmModal";
import HistoryPagination from "@/components/history/HistoryPagination";

export default function HistoryPage() {
  const [diagnoses, setDiagnoses] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [statusFilter, setStatusFilter] = useState("all");
  const [pendingDeleteId, setPendingDeleteId] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      setIsLoading(true);
      setError("");
      try {
        const result = await getDiagnosisHistory(page, 10);
        setDiagnoses(result.data);
        setPagination(result.pagination);
      } catch (err) {
        setError(err?.response?.data?.message || "Couldn't load your history.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchHistory();
  }, [page]);

  const filteredDiagnoses = diagnoses.filter((item) => {
    if (statusFilter === "all") return true;
    return statusFilter === "healthy" ? item.isHealthy : !item.isHealthy;
  });

  const handleDelete = async (id) => {
    try {
      await deleteDiagnosis(id);
      setDiagnoses((prev) => prev.filter((d) => d._id !== id));
    } catch (err) {
      alert(err?.response?.data?.message || "Couldn't delete this record.");
    } finally {
      setPendingDeleteId(null);
    }
  };

  if (isLoading) return <div className="p-10">Loading...</div>;
  if (error) return <div className="p-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-[1024px] mx-auto px-6 md:px-10 pb-10">
      <HistoryHeader />

      <HistoryFilters statusFilter={statusFilter} onChange={setStatusFilter} />

      {filteredDiagnoses.length === 0 ? (
        <p className="text-muted py-10 text-center">
          No results match this filter on this page.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDiagnoses.map((item) => (
            <HistoryCard
              key={item._id}
              item={item}
              onDeleteClick={setPendingDeleteId}
            />
          ))}
        </div>
      )}

      <HistoryPagination
        pagination={pagination}
        onPrev={() => setPage((p) => p - 1)}
        onNext={() => setPage((p) => p + 1)}
      />

      {pendingDeleteId && (
        <DeleteConfirmModal
          onCancel={() => setPendingDeleteId(null)}
          onConfirm={() => handleDelete(pendingDeleteId)}
        />
      )}
    </div>
  );
}