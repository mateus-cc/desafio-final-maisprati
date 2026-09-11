import { twMerge } from "tailwind-merge";

export function Button({
children,
disabled = false,
className,
onClick,
}) {
return (
<button
type="button"
disabled={disabled}
onClick={onClick}
className={twMerge(
"bg-gold-500 text-gray-500 w-full rounded-xl p-2 flex justify-center items-center gap-2",
className
)}
>
{children} </button>
);
}
