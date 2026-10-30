import { Unplug } from "lucide-react";
export function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen w-full text-center">
      <h1 className="text-5xl text-brow-200 flex items-center justify-center gap-5 hover:text-gold-500 transition-colors duration-300">
        <Unplug size={48} />
        404 NOT FOUND
      </h1>
    </div>
  );
}
