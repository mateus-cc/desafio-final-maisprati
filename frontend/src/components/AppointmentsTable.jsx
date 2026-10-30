import { useState } from "react";
import { StatusBadge } from "./StatusBadge";
import { Pagination } from "./Pagination";

const appointments = [
  {
    id: 1,
    client: "Carlos Mendes",
    phone: "(11) 99234-5678",
    service: "Corte + Barba",
    barber: "Ricardo Alves",
    date: "27 de ago.",
    time: "09:00",
    value: "R$75",
    status: "Confirmado",
  },
  {
    id: 2,
    client: "Felipe Rocha",
    phone: "(11) 98765-4321",
    service: "Degradê",
    barber: "Diego Santos",
    date: "27 de ago.",
    time: "10:00",
    value: "R$55",
    status: "Confirmado",
  },
  {
    id: 3,
    client: "Thiago Costa",
    phone: "(11) 97654-3210",
    service: "Barba Completa",
    barber: "Marcos Lima",
    date: "27 de ago.",
    time: "11:00",
    value: "R$40",
    status: "Pendente",
  },
  {
    id: 4,
    client: "Bruno Ferreira",
    phone: "(11) 96543-2109",
    service: "Corte Clássico",
    barber: "Ricardo Alves",
    date: "27 de ago.",
    time: "14:00",
    value: "R$45",
    status: "Confirmado",
  },
  {
    id: 5,
    client: "André Lima",
    phone: "(11) 95432-1098",
    service: "Pacote Premium",
    barber: "Diego Santos",
    date: "27 de ago.",
    time: "15:00",
    value: "R$120",
    status: "Cancelado",
  },
  {
    id: 6,
    client: "Lucas Martins",
    phone: "(11) 94321-0987",
    service: "Corte + Barba",
    barber: "Marcos Lima",
    date: "28 de ago.",
    time: "09:00",
    value: "R$75",
    status: "Confirmado",
  },
  {
    id: 7,
    client: "João Silva",
    phone: "(11) 93210-9876",
    service: "Degradê",
    barber: "Ricardo Alves",
    date: "28 de ago.",
    time: "10:00",
    value: "R$55",
    status: "Pendente",
  },
  {
    id: 8,
    client: "Rafael Souza",
    phone: "(11) 92109-8765",
    service: "Barba Completa",
    barber: "Diego Santos",
    date: "28 de ago.",
    time: "11:00",
    value: "R$40",
    status: "Confirmado",
  },
];

const ITEMS_PER_PAGE = 5;

export function AppointmentsTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(appointments.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentAppointments = appointments.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  function changePage(page) {
    setCurrentPage(page);
  }

  return (
    <div className="w-full p-10">
      {/* TABELA */}
      <div className="w-full overflow-x-auto rounded-2xl border border-brow-300">
        <table className="w-full min-w-[1050px] border-collapse">
          {/* HEADER */}
          <thead>
            <tr className="bg-[#191919]">
              <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-brow-200">
                Cliente
              </th>

              <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-brow-200">
                Serviço
              </th>

              <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-brow-200">
                Barbeiro
              </th>

              <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-brow-200">
                Data
              </th>

              <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-brow-200">
                Horário
              </th>

              <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-brow-200">
                Valor
              </th>

              <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-brow-200">
                Status
              </th>

              <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-brow-200">
                Ações
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {currentAppointments.map((appointment) => (
              <tr
                key={appointment.id}
                className="border-t border-brow-300 bg-[#1c1c1c] transition-colors hover:bg-[#222222]"
              >
                {/* CLIENTE */}
                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-brow-100">
                      {appointment.client}
                    </span>

                    <span className="text-[11px] text-brow-200">
                      {appointment.phone}
                    </span>
                  </div>
                </td>

                {/* SERVIÇO */}
                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-brow-100">
                  {appointment.service}
                </td>

                {/* BARBEIRO */}
                <td className="whitespace-nowrap px-4 py-4 text-sm text-brow-200">
                  {appointment.barber}
                </td>

                {/* DATA */}
                <td className="whitespace-nowrap px-4 py-4 text-sm text-brow-200">
                  {appointment.date}
                </td>

                {/* HORÁRIO */}
                <td className="whitespace-nowrap px-4 py-4 text-sm font-bold text-brow-100">
                  {appointment.time}
                </td>

                {/* VALOR */}
                <td className="whitespace-nowrap px-4 py-4 text-sm font-bold text-gold-500">
                  {appointment.value}
                </td>

                {/* STATUS */}
                <td className="px-4 py-4">
                  <StatusBadge status={appointment.status} />
                </td>

                {/* AÇÕES */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    {appointment.status === "Pendente" && (
                      <button
                        type="button"
                        className="whitespace-nowrap rounded-lg border border-green-900 px-3 py-1.5 text-[11px] font-medium text-green-400 transition-colors hover:bg-green-900/20"
                      >
                        Confirmar
                      </button>
                    )}

                    {appointment.status !== "Cancelado" && (
                      <button
                        type="button"
                        className="whitespace-nowrap rounded-lg border border-brow-300 px-3 py-1.5 text-[11px] font-medium text-brow-100 transition-colors hover:border-gold-500 hover:text-gold-500"
                      >
                        Editar
                      </button>
                    )}

                    {appointment.status === "Confirmado" && (
                      <button
                        type="button"
                        className="whitespace-nowrap rounded-lg border border-brow-300 px-3 py-1.5 text-[11px] font-medium text-brow-200 transition-colors hover:border-brow-100 hover:text-brow-100"
                      >
                        Concluir
                      </button>
                    )}

                    {appointment.status !== "Cancelado" && (
                      <button
                        type="button"
                        className="whitespace-nowrap rounded-lg border border-red-900 px-3 py-1.5 text-[11px] font-medium text-red-400 transition-colors hover:bg-red-900/20"
                      >
                        Cancelar
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <Pagination changePage={changePage} currentPage={currentPage}  totalPages={totalPages} />
      </div>
      )
}