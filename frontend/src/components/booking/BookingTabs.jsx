export function BookingTabs({ activeTab, onChange, appointmentsCount }) {
  const tabs = [
    { id: "new", label: "Novo Agendamento" },
    {
      id: "appointments",
      label: `Meus Agendamentos (${appointmentsCount})`,
    },
  ];

  return (
    <nav className="flex gap-2 border-b border-brow-500">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`border-b px-4 py-3 text-sm transition-colors ${
            activeTab === tab.id
              ? "border-gold-500 font-semibold text-gold-500"
              : "border-transparent text-brow-200 hover:text-brow-100"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}