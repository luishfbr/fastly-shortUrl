import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center w-full h-screen mx-auto">
      <Loader2 className="animate-spin" />
    </div>
  );
}
