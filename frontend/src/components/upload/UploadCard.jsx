"use client";
import { Leaf, Camera } from "lucide-react";
import { useState, useRef } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function UploadCard() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const router = useRouter();

  const handleFile = (selected) => {
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleAnalyze = async () => {
  if (!file) return;

  setIsUploading(true);
  setError("");

  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await api.post("/diagnosis/analyze", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const diagnosisId = response.data?.diagnosis?._id;
    router.push(`/diagnosis/${diagnosisId}`);
  } catch (err) {
    console.error(err);
    setError(
      err?.response?.data?.message || "Something went wrong. Please try again."
    );
  } finally {
    setIsUploading(false);
  }
};

  return (
    <div className="flex-1 flex items-center justify-center relative">
      <div className="absolute -inset-12 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="bg-white rounded-4xl shadow-[8px_16px_32px_rgba(96,56,8,0.08)] w-full aspect-square max-w-md flex flex-col items-center justify-center p-10">
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={(e) => handleFile(e.target.files?.[0])}
          className="hidden"
        />
        {!preview && (
          <>
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Leaf className="text-primary" size={40} />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-1">
              Drop photo here
            </h2>
            <p className="text-muted mb-8">or click to browse</p>
            <button
              onClick={() => inputRef.current?.click()}
              className="bg-primary text-white font-semibold px-10 py-3 rounded-full shadow-[0px_4px_4px_rgba(96,56,8,0.15)] flex items-center gap-3 hover:bg-primary-hover transition"
            >
              <Camera size={20} />
              Select Photo
            </button>
          </>
        )}
        {preview && (
          <div className="w-full flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[260px] rounded-3xl overflow-hidden mb-6">
              <img
                src={preview}
                alt="Selected leaf"
                className="w-full h-full object-cover"
              />
            </div>
            
            <button
      onClick={handleAnalyze}
      disabled={isUploading}
      className="bg-primary text-white font-semibold px-10 py-3 rounded-full shadow-[0px_4px_4px_rgba(96,56,8,0.15)] flex items-center gap-3 hover:bg-primary-hover transition"
    >
      {isUploading ? "Analyzing..." : "Analyze Leaf"}
    </button>
          </div>
        )}
      </div>
    </div>
  );
}
