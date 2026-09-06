export function Button({children}) {
  return (
    <button className="bg-gold-500 text-gray-500 w-full rounded-xl p-2 flex justify-center items-start gap-2">
      {children}
    </button>
  );
}
