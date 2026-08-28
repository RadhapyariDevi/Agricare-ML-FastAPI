import { Camera, Sparkles, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "1. Take Photo",
    description: "Snap a clear picture of the affected leaf or plant using your smartphone.",
  },
  {
    icon: Sparkles,
    title: "2. Analysis",
    description: "Our advanced AI instantly scans the image against thousands of known crop diseases.",
  },
  {
    icon: ClipboardCheck,
    title: "3. Get Diagnosis",
    description: "Receive immediate, actionable advice on treatment and prevention.",
  },
];

export default function WorksSection() {
  return (
    <section className="bg-sidebar px-6 md:px-16 py-16 relative overflow-hidden">
      <div className="absolute -top-32 -right-16 size-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="text-center mb-12 relative">
        <p className="text-tertiary text-sm font-semibold tracking-widest uppercase mb-2">
          The Process
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">How it Works</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto relative">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="bg-card rounded-xl shadow-sm p-6 flex-1 flex flex-col items-center text-center"
            >
              <div className="bg-primary size-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                <Icon className="text-white" size={26} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}