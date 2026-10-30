import { useState } from "react";

import { BookingTabs } from "./BookingTabs";
import { BookingSteps } from "./BookingSteps";
import { ServiceStep } from "./ServiceStep";
import { BarberStep } from "./BarberStep";
import { DateTimeStep } from "./DateTimeStep";
import { ConfirmationStep } from "./ConfirmationStep";

const initialBooking = {
  service: null,
  barber: null,
  date: "",
  time: "",
};

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatBookingDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

export function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeTab, setActiveTab] = useState("new");

  const [booking, setBooking] = useState(initialBooking);
  const [appointments, setAppointments] = useState([]);

  function updateBooking(field, value) {
    setBooking((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function nextStep() {
    if (currentStep === 1 && !booking.service) return;
    if (currentStep === 2 && !booking.barber) return;
    if (currentStep === 3 && (!booking.date || !booking.time)) return;

    setCurrentStep((previous) => Math.min(previous + 1, 4));
  }

  function previousStep() {
    setCurrentStep((previous) => Math.max(previous - 1, 1));
  }

  function resetBooking() {
    setBooking(initialBooking);
    setCurrentStep(1);
  }

  function confirmBooking() {
    if (
      !booking.service ||
      !booking.barber ||
      !booking.date ||
      !booking.time
    ) {
      return;
    }

    const newAppointment = {
      id: crypto.randomUUID(),
      ...booking,
      status: "Confirmado",
    };

    setAppointments((previous) => [
      newAppointment,
      ...previous,
    ]);

    resetBooking();
    setActiveTab("appointments");
  }

  return (
    <main className="min-h-screen bg-gray-500 px-4 py-5 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <BookingTabs
          activeTab={activeTab}
          onChange={setActiveTab}
          appointmentsCount={appointments.length}
        />

        {activeTab === "new" ? (
          <div className="pt-6">
            <BookingSteps currentStep={currentStep} />

            <div className="mt-8">
              {currentStep === 1 && (
                <ServiceStep
                  selectedService={booking.service}
                  onSelect={(service) =>
                    updateBooking("service", service)
                  }
                />
              )}

              {currentStep === 2 && (
                <BarberStep
                  selectedBarber={booking.barber}
                  onSelect={(barber) =>
                    updateBooking("barber", barber)
                  }
                />
              )}

              {currentStep === 3 && (
                <DateTimeStep
                  date={booking.date}
                  time={booking.time}
                  onDateChange={(date) =>
                    updateBooking("date", date)
                  }
                  onTimeChange={(time) =>
                    updateBooking("time", time)
                  }
                />
              )}

              {currentStep === 4 && (
                <ConfirmationStep booking={booking} />
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  if (currentStep === 1) {
                    setActiveTab("appointments");
                  } else {
                    previousStep();
                  }
                }}
                className="text-sm text-brow-200 transition-colors hover:text-brow-100"
              >
                ← Voltar
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  disabled={
                    (currentStep === 1 && !booking.service) ||
                    (currentStep === 2 && !booking.barber) ||
                    (currentStep === 3 &&
                      (!booking.date || !booking.time))
                  }
                  onClick={nextStep}
                  className="rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-gray-500 transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continuar →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={confirmBooking}
                  className="rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-gray-500 transition-colors hover:bg-gold-400"
                >
                  Confirmar Agendamento
                </button>
              )}
            </div>
          </div>
        ) : (
          <section className="pt-6">
            <h1 className="mb-5 font-display text-xl font-semibold text-brow-100">
              Meus Agendamentos
            </h1>

            {appointments.length === 0 ? (
              <div className="rounded-xl border border-brow-500 bg-gray-300 p-8 text-center">
                <p className="text-sm text-brow-200">
                  Você ainda não possui agendamentos.
                </p>

                <button
                  type="button"
                  onClick={() => setActiveTab("new")}
                  className="mt-4 rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-gray-500"
                >
                  Agendar agora
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {appointments.map((appointment) => (
                  <article
                    key={appointment.id}
                    className="flex flex-col justify-between gap-4 rounded-xl border border-brow-500 bg-gray-300 p-4 sm:flex-row sm:items-center"
                  >
                    <div>
                      <h2 className="font-semibold text-brow-100">
                        {appointment.service.name}
                      </h2>

                      <p className="mt-1 text-sm text-brow-200">
                        {appointment.barber.name}
                      </p>

                      <p className="mt-1 text-xs text-brow-200">
                        {formatBookingDate(appointment.date)} às{" "}
                        {appointment.time}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                      <span className="font-semibold text-gold-500bg-gold-500">
                        {formatCurrency(appointment.service.price)}
                      </span>

                      <span className="rounded-full border border-green-900 bg-green-900/20 px-3 py-1 text-xs text-green-500">
                        {appointment.status}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}