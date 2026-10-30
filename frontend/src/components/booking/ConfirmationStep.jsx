function formatDate(dateString) {
  if (!dateString) return "";

  const [year, month, day] = dateString.split("-").map(Number);

  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date(year, month - 1, day));
}

function SummaryItem({ label, children }) {
  return (
    <div>
      <p className="mb-1 text-[11px] uppercase tracking-wider text-brow-200">
        {label}
      </p>

      <p className="text-sm font-semibold text-brow-100">
        {children}
      </p>
    </div>
  );
}

export function ConfirmationStep({ booking }) {
  const { service, barber, date, time } = booking;

  return (
    <section>
      <h1 className="mb-5 font-display text-xl font-semibold text-brow-100">
        Confirmar agendamento
      </h1>

      <div className="grid grid-cols-1 gap-6 rounded-2xl border border-brow-500 bg-gray-300 p-5 sm:grid-cols-2 sm:p-6">
        <div className="space-y-5">
          <SummaryItem label="Serviço">
            {service.name}
          </SummaryItem>

          <SummaryItem label="Data">
            {formatDate(date)}
          </SummaryItem>

          <SummaryItem label="Duração">
            {service.duration} min
          </SummaryItem>
        </div>

        <div className="space-y-5">
          <SummaryItem label="Barbeiro">
            {barber.name}
          </SummaryItem>

          <SummaryItem label="Horário">
            {time}
          </SummaryItem>

          <SummaryItem label="Valor">
            <span className="text-base text-gold-500">
              {service.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </SummaryItem>
        </div>
      </div>

      <p className="mt-4 text-xs leading-5 text-brow-200">
        Confira as informações antes de confirmar o agendamento.
      </p>
    </section>
  );
}