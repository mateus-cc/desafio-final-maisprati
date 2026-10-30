import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ===============================
// DADOS
// ===============================

const revenueData = [
  { month: "Mar", revenue: 7200 },
  { month: "Abr", revenue: 8300 },
  { month: "Mai", revenue: 10800 },
  { month: "Jun", revenue: 10100 },
  { month: "Jul", revenue: 12400 },
  { month: "Ago", revenue: 6520 },
];

const serviceData = [
  {
    name: "Corte + Barba",
    value: 3750,
  },
  {
    name: "Pacote Premium",
    value: 2450,
  },
  {
    name: "Degradê",
    value: 1650,
  },
  {
    name: "Barba Completa",
    value: 1200,
  },
];

const barberData = [
  {
    name: "Ricardo",
    appointments: 3,
    revenue: 195,
  },
  {
    name: "Diego",
    appointments: 3,
    revenue: 170,
  },
  {
    name: "Marcos",
    appointments: 2,
    revenue: 105,
  },
];

const volumeData = [
  {
    month: "Mar",
    appointments: 97,
    revenue: 6890,
  },
  {
    month: "Abr",
    appointments: 120,
    revenue: 9110,
  },
  {
    month: "Mai",
    appointments: 143,
    revenue: 10820,
  },
  {
    month: "Jun",
    appointments: 130,
    revenue: 9820,
  },
  {
    month: "Jul",
    appointments: 150,
    revenue: 11340,
  },
  {
    month: "Ago",
    appointments: 90,
    revenue: 6710,
  },
];

const PIE_COLORS = ["#c9a84c", "#9d7e2e", "#d6bd70", "#80641f"];

// ===============================
// FORMATADORES
// ===============================

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

// ===============================
// TOOLTIP
// ===============================

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="rounded-lg border border-brow-300 bg-[#181818] px-3 py-2 shadow-lg">
      {label && <p className="mb-1 text-xs text-brow-200">{label}</p>}

      {payload.map((item) => (
        <p key={item.dataKey} className="text-xs font-semibold text-gold-500">
          {item.dataKey === "revenue"
            ? formatCurrency(item.value)
            : `${item.value}`}
        </p>
      ))}
    </div>
  );
}

// ===============================
// COMPONENTE PRINCIPAL
// ===============================

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
      {/* ======================================
          RECEITA MENSAL
      ====================================== */}

      <div className="rounded-xl border border-brow-300 bg-[#1b1b1b] p-4">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-brow-200">
              Receita mensal
            </p>

            <h2 className="text-lg font-semibold text-brow-100">R$ 55.920</h2>
          </div>

          <span className="rounded-full bg-green-900/30 px-2 py-1 text-[10px] text-green-400">
            ↑ 14%
          </span>
        </div>

        <div className="h-[170px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={revenueData}
              margin={{
                top: 10,
                right: 10,
                left: -15,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient
                  id="revenueGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopOpacity={0.35} />

                  <stop offset="100%" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                stroke="#292929"
                strokeDasharray="2 2"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                tick={{
                  fill: "#8a8178",
                  fontSize: 9,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fill: "#8a8178",
                  fontSize: 8,
                }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `R$${value / 1000}k`}
              />

              <Tooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#c9a84c"
                strokeWidth={2}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ======================================
          POR SERVIÇO
      ====================================== */}

      <div className="rounded-xl border border-brow-300 bg-[#1b1b1b] p-4">
        <div className="mb-2">
          <p className="text-[10px] uppercase tracking-wider text-brow-200">
            Por serviço
          </p>

          <h2 className="text-lg font-semibold text-brow-100">Receita</h2>
        </div>

        <div className="flex items-center gap-3">
          {/* GRÁFICO */}

          <div className="h-[150px] w-[150px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={serviceData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={32}
                  outerRadius={55}
                  paddingAngle={2}
                  stroke="none"
                >
                  {serviceData.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value) => formatCurrency(value)}
                  contentStyle={{
                    backgroundColor: "#181818",
                    border: "1px solid #333",
                    borderRadius: "8px",
                    fontSize: "11px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* LEGENDA */}

          <div className="flex flex-1 flex-col gap-2">
            {serviceData.map((service, index) => (
              <div
                key={service.name}
                className="flex items-center justify-between gap-2"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{
                      backgroundColor: PIE_COLORS[index],
                    }}
                  />

                  <span className="truncate text-[10px] text-brow-200">
                    {service.name}
                  </span>
                </div>

                <span className="text-[10px] font-semibold text-brow-100">
                  {formatCurrency(service.value)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================
          PERFORMANCE POR BARBEIRO
      ====================================== */}

      <div className="rounded-xl border border-brow-300 bg-[#1b1b1b] p-4">
        <div className="mb-2">
          <p className="text-[10px] uppercase tracking-wider text-brow-200">
            Performance
          </p>

          <h2 className="text-lg font-semibold text-brow-100">Por barbeiro</h2>
        </div>

        {/* GRÁFICO */}

        <div className="h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barberData}
              margin={{
                top: 5,
                right: 5,
                left: -20,
                bottom: 0,
              }}
            >
              <CartesianGrid stroke="#292929" vertical={false} />

              <XAxis
                dataKey="name"
                tick={{
                  fill: "#8a8178",
                  fontSize: 9,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fill: "#8a8178",
                  fontSize: 8,
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip content={<CustomTooltip />} />

              <Bar
                dataKey="appointments"
                fill="#c9a84c"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* TABELA */}

        <div className="mt-2">
          {barberData.map((barber) => (
            <div
              key={barber.name}
              className="flex items-center justify-between border-t border-brow-300 py-2"
            >
              <span className="text-[10px] font-medium text-brow-100">
                {barber.name}
              </span>

              <div className="flex items-center gap-5">
                <span className="text-[9px] text-brow-200">
                  {barber.appointments} atend.
                </span>

                <span className="text-[10px] font-semibold text-gold-500">
                  {formatCurrency(barber.revenue)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================
          VOLUME
      ====================================== */}

      <div className="rounded-xl border border-brow-300 bg-[#1b1b1b] p-4">
        <div className="mb-2">
          <p className="text-[10px] uppercase tracking-wider text-brow-200">
            Volume
          </p>

          <h2 className="text-lg font-semibold text-brow-100">
            Atendimentos / mês
          </h2>
        </div>

        {/* GRÁFICO */}

        <div className="h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={volumeData}
              margin={{
                top: 5,
                right: 5,
                left: -20,
                bottom: 0,
              }}
            >
              <CartesianGrid stroke="#292929" vertical={false} />

              <XAxis
                dataKey="month"
                tick={{
                  fill: "#8a8178",
                  fontSize: 9,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fill: "#8a8178",
                  fontSize: 8,
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip content={<CustomTooltip />} />

              <Bar
                dataKey="appointments"
                fill="#333333"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* DADOS ABAIXO */}

        <div className="mt-2">
          {volumeData
            .slice()
            .reverse()
            .slice(0, 3)
            .map((item) => (
              <div
                key={item.month}
                className="flex items-center justify-between border-t border-brow-300 py-2"
              >
                <span className="text-[10px] text-brow-100">{item.month}</span>

                <div className="flex items-center gap-4">
                  <span className="text-[9px] text-brow-200">
                    {item.appointments} atend.
                  </span>

                  <span className="text-[10px] font-semibold text-gold-500">
                    {formatCurrency(item.revenue)}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
