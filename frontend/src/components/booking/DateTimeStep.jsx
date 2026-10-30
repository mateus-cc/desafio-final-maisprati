const availableTimes = [
  "08:00", "08:30", "09:00", "09:30",
  "10:00", "10:30", "11:00", "11:30",
  "12:00", "13:00", "13:30", "14:00",
  "14:30", "15:00", "15:30", "16:00",
  "16:30", "17:00", "17:30", "18:00",
];

function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function DateTimeStep({
  date,
  time,
  onDateChange,
  onTimeChange,
}) {
  const today = getLocalDateString();

  return (
    <section>
      <h1 className="mb-5 font-display text-xl font-semibold text-brow-100">
        Escolha data e horário
      </h1>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div>
          <label
            htmlFor="booking-date"
            className="mb-2 block text-[11px] uppercase tracking-wider text-brow-200"
          >
            Data
          </label>

          <input
            id="booking-date"
            type="date"
            min={today}
            value={date}
            onChange={(event) => {
              onDateChange(event.target.value);
              onTimeChange("");
            }}
            className="w-full rounded-lg border border-brow-500 bg-gray-300 px-4 py-3 text-sm text-brow-100 outline-none focus:border-gold-500"
          />
        </div>

        <div>
          <p className="mb-2 text-[11px] uppercase tracking-wider text-brow-200">
            Horário disponível
          </p>

          {!date ? (
            <p className="rounded-lg border border-brow-500 p-4 text-sm text-brow-200">
              Selecione uma data para consultar os horários.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {availableTimes.map((availableTime) => {
                const selected = time === availableTime;

                return (
                  <button
                    key={availableTime}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => onTimeChange(availableTime)}
                    className={`rounded-lg border px-2 py-2 text-sm transition-colors ${
                      selected
                        ? "border-gold-500 bg-gold-500 font-semibold text-brow-500"
                        : "border-brow-500 bg-gray-300 text-[#a99b83] hover:border-gold-500"
                    }`}
                  >
                    {availableTime}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}