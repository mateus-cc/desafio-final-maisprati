const services = [
  {
    id: 1,
    name: "Corte Clássico",
    description: "Corte tradicional com tesoura e máquina",
    duration: 30,
    price: 45,
  },
  {
    id: 2,
    name: "Corte + Barba",
    description: "Corte completo com modelagem de barba",
    duration: 60,
    price: 75,
  },
  {
    id: 3,
    name: "Barba Completa",
    description: "Navalhado, modelagem e hidratação",
    duration: 40,
    price: 40,
  },
  {
    id: 4,
    name: "Degradê",
    description: "Fade americano com acabamento perfeito",
    duration: 45,
    price: 55,
  },
  {
    id: 5,
    name: "Tratamento Capilar",
    description: "Hidratação profunda e finalização",
    duration: 50,
    price: 65,
  },
  {
    id: 6,
    name: "Pacote Premium",
    description: "Corte + Barba + Tratamento",
    duration: 90,
    price: 120,
  },
];

export function ServiceStep({ selectedService, onSelect }) {
  return (
    <section>
      <h1 className="mb-5 font-display text-xl font-semibold text-brow-100">
        Escolha o serviço
      </h1>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const selected = selectedService?.id === service.id;

          return (
            <button
              key={service.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(service)}
              className={`min-h-28.5 rounded-xl border p-4 text-left transition-colors ${
                selected
                  ? "border-gold-500 bg-brow-400"
                  : "border-brow-500 bg-gray-300 hover:border-gold-700"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm font-semibold text-brow-100">
                  {service.name}
                </span>

                <span className="shrink-0 text-sm font-bold text-gold-500">
                  R$ {service.price}
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-brow-200">
                {service.description}
              </p>

              <p className="mt-3 text-xs text-brow-200">
                {service.duration} min
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}