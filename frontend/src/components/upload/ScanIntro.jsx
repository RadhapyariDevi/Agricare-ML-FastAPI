import {Sun, Scan} from "lucide-react";

const tips = [
    {
        icon:Sun,
        title: "Good Lighting",
        description: "Avoid harsh shadows or blurry images."
    },
    {
        icon:Scan,
        title: "Focus on the Leaf",
        description: "Ensure the affected area is clearly visible."
    },
];

export default function ScanIntro(){
    return(
        <div className="flex-1 flex flex-col justify-center max-w-md">
            <h1 className="text-4xl font-bold text-foreground mb-6">
                Scan your plant
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-8">
                Upload a clear photo of your plant leaf. Keep the leaf in focus and
                under good lighting for the best results. We&apos;ll identify
                what&apos;s wrong and how to fix it.
            </p>
            <div className="grid grid-cols-2 gap-6">
        {tips.map((tip) => {
          const Icon = tip.icon;
          return (
            <div
              key={tip.title}
              className="bg-input-bg p-6 rounded-xl shadow-sm flex flex-col gap-3"
            >
              <Icon className="text-primary" size={28} />
              <span className="font-semibold text-foreground">
                {tip.title}
              </span>
              <p className="text-sm text-muted">{tip.description}</p>
            </div>
          );
        })}
      </div>
        </div>
        
    );
}