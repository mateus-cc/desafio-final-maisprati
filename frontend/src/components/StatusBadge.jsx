export function StatusBadge({ status }) {
  const styles = {
    Confirmado: "border-green-900 bg-green-900/20 text-green-400",
    Pendente: "border-yellow-900 bg-yellow-900/20 text-yellow-500",
    Cancelado: "border-red-900 bg-red-900/20 text-red-400",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-medium ${
        styles[status]
      }`}
    >
      {status}
    </span>
  );
}