import { Zap, Leaf } from "lucide-react";

export default function AgriCareSection() {
  return (
    <section className="bg-background px-6 md:px-16 py-16 md:mb-15">
      <div className="text-center mb-12">
        <p className="text-tertiary text-sm font-semibold tracking-widest uppercase mb-2">
          The Advantage
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Why AgriCare
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
        <div className="md:col-span-2 bg-[#e9e9dd] rounded-xl shadow-sm min-h-55 relative overflow-hidden">
          <img
            src="/plant.png"
            alt="Plant"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-transparent" />

          <div className="relative z-10 h-full p-6 flex flex-col justify-end">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              AI-Powered Diagnosis
            </h3>

            <p className="text-foreground max-w-md">
              Upload a crop image and get an AI-generated disease prediction in
              seconds.
            </p>
          </div>
        </div>

        <div className="bg-primary rounded-xl shadow-sm p-6 flex flex-col justify-center relative overflow-hidden min-h-55">
          <div className="absolute -bottom-8 -right-8 size-32 bg-white/10 rounded-full" />
          <Zap className="text-white mb-3" size={28} />
          <h3 className="text-xl font-semibold text-white mb-1">
            Quick Diagnosis
          </h3>
          <p className="text-white/90">
            Get your crop diagnosis quickly with our efficient AI system.
          </p>
        </div>

        <div className="md:col-span-3 bg-secondary rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[180px]">
          <div className="max-w-lg">
            <h3 className="text-xl font-semibold text-[#783d01] mb-1">
              Incredibly Simple
            </h3>
            <p className="text-[#783d01]">
              Upload a crop image, view the diagnosis, and access previous
              results from a single, easy-to-use interface.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-3 flex items-center gap-3 shrink-0">
            <div className="bg-[#b1f0ce] rounded-md size-12 flex items-center justify-center">
              <Leaf className="text-primary" size={20} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-border rounded-full h-3 w-24" />
              <div className="bg-border rounded-full h-2 w-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
