import { Trash2 } from "lucide-react";

export default function DeleteConfirmModal({ onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm overflow-hidden">
        <div className="flex flex-col items-center gap-3 p-10">
          <div className="bg-[#ffdad6] rounded-full size-16 flex items-center justify-center">
            <Trash2 className="text-danger" size={24} />
          </div>
          <h3 className="text-2xl font-semibold text-foreground text-center">
            Delete Record?
          </h3>
          <p className="text-muted text-lg text-center">
            Are you sure you want to delete this scan?
          </p>
        </div>
        <div className="border-t border-border flex">
          <button
            onClick={onCancel}
            className="flex-1 py-6 font-semibold text-muted hover:bg-background transition"
          >
            Cancel
          </button>
          <div className="w-px bg-border" />
          <button
            onClick={onConfirm}
            className="flex-1 py-6 font-semibold text-danger hover:bg-background transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}