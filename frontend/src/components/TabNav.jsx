import { useState } from "react";

export function TabNav() {
  const [active, setActive] = useState("client");
  return (
    <nav className="bg-gray-300 w-full border border-gray-300 rounded-xl p-1 flex items-center justify-between gap-1.25">
      <div
        onClick={() => setActive("client")}
        className={`${active === "client" ? "bg-gold-500 text-center text-gray-500 w-full rounded-xl p-2" : "bg--gray-300 text-center text-brow-200 w-full rounded-xl p-2 hover:text-brow-100"}`}
      >
        Sou Cliente
      </div>
      <div
        onClick={() => setActive("owner")}
        className={`${active === "owner" ? "bg-gold-500 text-center text-gray-500 w-full rounded-xl p-2" : "bg-gray-300 text-center text-brow-200 w-full rounded-xl p-2 hover:text-brow-100"}`}
      >
        Sou Proprietário
      </div>
    </nav>
  );
}
