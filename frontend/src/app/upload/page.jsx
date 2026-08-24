import ProtectedRoute from "@/components/ProtectedRoute";
import ScanIntro from "@/components/upload/ScanIntro";
import UploadCard from "@/components/upload/UploadCard";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col md:flex-row gap-16 items-center min-h-[80vh]">
        <ScanIntro />
        <UploadCard />
      </div>
    </ProtectedRoute>
    
  );
}