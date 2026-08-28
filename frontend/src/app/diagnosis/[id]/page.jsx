"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, Percent, Stethoscope, Camera, Wrench } from "lucide-react";
import api from "@/lib/api";

export default function DiagnosisPage({ params }) {
  const { id } = use(params);
  const router = useRouter();

  const [diagnosis, setDiagnosis] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDiagnosis = async () => {
      try {
        const response = await api.get(`/diagnosis/${id}`);
        setDiagnosis(response.data.data);
      } catch (err) {
        setError(err?.response?.data?.message || "Couldn't load this diagnosis.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchDiagnosis();
  }, [id]);

  if (isLoading) return <div className="p-10">Loading...</div>;
  if (error) return <div className="p-10 text-red-500">{error}</div>;

  return (
    <div className="flex flex-col items-start relative w-full">
      {/*background glow*/}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute bg-primary/10 blur-3xl -right-64 top-0 rounded-full size-96" />
        <div className="absolute bg-secondary/10 blur-3xl -left-32 bottom-0 rounded-full size-64" />
      </div>

      {/* image + summary */}
      <div className="flex flex-col md:flex-row gap-16 items-start px-6 md:px-10 py-12 md:py-16 w-full">
        <div className="bg-card rounded-xl shadow-lg overflow-hidden shrink-0 w-full md:w-[412px] aspect-square relative">
          <img
            src={diagnosis.imageUrl}
            alt="Analyzed leaf"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="scan-line absolute left-0 w-full h-1 bg-tertiary shadow-[0px_0px_15px_0px_rgba(142,78,20,0.8)]" />
          </div>
        </div>

        <div className="flex flex-col gap-6 items-start w-full md:w-[436px]">
          <div className="flex gap-2 items-center flex-wrap">
            {!diagnosis.isHealthy && (
              <span className="bg-[#ffdad6] text-danger flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold">
                <AlertTriangle size={14} />
                Infected
              </span>
            )}
            <span className="bg-secondary text-secondary-foreground flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold">
              <Percent size={14} />
              {(diagnosis.confidence * 100).toFixed(0)}% Confidence
            </span>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Diagnosis:
            </h1>
            <h1
              className={`text-3xl md:text-4xl font-normal leading-tight ${
                diagnosis.isHealthy ? "text-primary" : "text-danger"
              }`}
            >
              {diagnosis.isHealthy ? "Healthy Leaf" : diagnosis.condition}
            </h1>
          </div>

          <div className="bg-input-bg p-6 rounded-xl shadow-sm w-full">
            <p className="text-muted text-lg">{diagnosis.cause}</p>
          </div>

          <div className="flex gap-3 w-full pt-3">
            <button
              onClick={() =>
                document
                  .getElementById("action-plan")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              disabled={diagnosis.isHealthy || !diagnosis.prevention?.length}
              className="bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold flex-1 px-6 py-3 rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <Wrench size={20} />
              Talk with AI
            </button>
            <button
              onClick={() => router.push("/upload")}
              className="border-2 border-tertiary text-foreground font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <Camera size={20} />
              New Scan
            </button>
          </div>
        </div>
      </div>

      {/*  diagnosis.prevention */}
      {diagnosis.prevention?.length > 0 && (
        <div id="action-plan" className="flex flex-col gap-6 px-6 md:px-10 pb-16 w-full">
          <div className="flex gap-3 items-center">
            <div className="bg-tertiary w-1 h-8 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Diagnosis Details & 
            </h2>
          </div>

          <div className="bg-primary rounded-xl shadow-lg p-5 md:p-6">
            <div className="flex gap-2 items-center mb-4">
              <Stethoscope className="text-primary-foreground" size={28} />
              <h3 className="text-xl md:text-2xl font-semibold text-primary-foreground/90">
                Immediate Action Plan
              </h3>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
              {diagnosis.prevention.map((step, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-3"
                >
                  
                  <p className="text-primary-foreground/80 text-md">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}