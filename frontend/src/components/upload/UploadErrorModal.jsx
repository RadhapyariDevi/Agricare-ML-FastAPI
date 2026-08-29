import { AlertTriangle } from "lucide-react";

export default function UploadErrorModal({ message, onDismiss, onRetry }) {
  const isNoLeafError = message === "No leaf detected in the image";

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden">
        <div className="flex flex-col items-center gap-3 p-8 pb-6">
          <div className="bg-[#ffdad6] rounded-full size-14 flex items-center justify-center">
            <AlertTriangle className="text-danger" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-foreground text-center">
            {isNoLeafError ? "No Leaf Detected" : "Something Went Wrong"}
          </h3>
          <p className="text-muted text-sm text-center">
            {isNoLeafError
              ? "Try again with a clear, well-lit photo where the leaf fills most of the frame."
              : message}
          </p>

          {isNoLeafError && (
            <ul className="text-muted text-sm text-left w-full mt-1 space-y-1 bg-background rounded-lg p-3">
              <li>• Avoid shadows or glare on the leaf</li>
              <li>• Get close enough that it fills the photo</li>
              <li>• Make sure the image isn't blurry</li>
            </ul>
          )}
        </div>

        <div className="border-t border-border flex">
          <button
            onClick={onDismiss}
            className="flex-1 py-4 font-semibold text-muted hover:bg-background transition cursor-pointer"
          >
            Dismiss
          </button>
          <div className="w-px bg-border" />
          <button
            onClick={onRetry}
            className="flex-1 py-4 font-semibold text-primary hover:bg-background transition cursor-pointer"
          >
            {isNoLeafError ? "Choose New Photo" : "Try Again"}
          </button>
        </div>
      </div>
    </div>
  );
}