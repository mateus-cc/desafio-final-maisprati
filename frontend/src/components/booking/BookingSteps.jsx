const steps = [
  { number: 1, label: "Serviço" },
  { number: 2, label: "Barbeiro" },
  { number: 3, label: "Data & Hora" },
  { number: 4, label: "Confirmar" },
];

export function BookingSteps({ currentStep }) {
  return (
    <nav
      aria-label="Etapas do agendamento"
      className="flex flex-wrap items-center gap-y-3"
    >
      {steps.map((step, index) => {
        const completed = currentStep > step.number;
        const active = currentStep === step.number;

        return (
          <div key={step.number} className="flex items-center">
            <div
              aria-current={active ? "step" : undefined}
              className={`flex items-center gap-2 ${
                active || completed
                  ? "text-gold-500"
                  : "text-brow-200"
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs ${
                  completed
                    ? "border-gold-500 bg-gold-500 text-gray-500"
                    : active
                      ? "border-gold-500 text-gold-500"
                      : "border-brow-400 text-brow-200"
                }`}
              >
                {completed ? "✓" : step.number}
              </span>

              <span
                className={`whitespace-nowrap text-xs sm:text-sm ${
                  active ? "font-semibold" : ""
                }`}
              >
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div className="mx-2 h-px w-5 bg-brow-400 sm:mx-3 sm:w-8" />
            )}
          </div>
        );
      })}
    </nav>
  );
}