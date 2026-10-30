const barbers = [
  { id: 1, name: "Ricardo Alves" },
  { id: 2, name: "Diego Santos" },
  { id: 3, name: "Marcos Lima" },
];

export function BarberStep({ selectedBarber, onSelect }) {
  return (
    <section>
      <h1 className="mb-5 font-display text-xl font-semibold text-[#f5f0e6]">
        Escolha o barbeiro
      </h1>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {barbers.map((barber) => {
          const selected = selectedBarber?.id === barber.id;

          return (
            <button
              key={barber.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(barber)}
              className={`flex min-h-[142px] flex-col items-center justify-center rounded-xl border p-5 transition-colors ${
                selected
                  ? "border-[#c9a84c] bg-[#282319]"
                  : "border-[#303030] bg-[#1c1c1c] hover:border-[#71613a]"
              }`}
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-full text-lg ${
                  selected
                    ? "bg-[#c9a84c] text-[#111111]"
                    : "bg-[#292929] text-[#f5f0e6]"
                }`}
              >
                {barber.name.charAt(0)}
              </span>

              <span className="mt-3 text-sm font-semibold text-[#f5f0e6]">
                {barber.name}
              </span>

              <span className="mt-1 text-xs text-[#9a9285]">
                Barbeiro
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}