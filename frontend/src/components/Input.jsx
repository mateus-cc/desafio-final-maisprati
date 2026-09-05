import { Eye, EyeOff } from "lucide-react";

export function Input({ placeholder, type, label, onChangeType }) {
  return (
    <div className="flex flex-col">
      <label className="text-brow-200 font-light text-[12px]">{label}</label>
      <div className="bg-gray-300 w-full rounded-xl flex items-center px-3 py-4 focus-within:outline-1 focus-within:outline-gold-500">
        <input
          className="bg-gray-300 w-full rounded outline-none"
          placeholder={placeholder}
          type={type}
        />
        {type === "password" || type === "text" ? (
          type === "password" ? (
            <Eye
              onClick={() => {
                onChangeType();
              }}
            />
          ) : (
            <EyeOff
              onClick={() => {
                onChangeType();
              }}
            />
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
