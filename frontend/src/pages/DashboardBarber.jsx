import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { DashboardCharts } from "../components/DashboardCharts";
import { HeaderDashboard } from "../components/HeaderDashboard";

export function DashboardBarber() {
  return (
    <div>
      <HeaderDashboard />
      <div className="p-10 w-full">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[14px] text-gold-500 tracking-[3px] uppercase font-mono font-bold">Financeiro</p>
            <h2 className="text-brow-100 text-[36px] font-display font-bold leading-10">Dashboard</h2>
          </div>
          <div className="flex items-center justify-between border border-brow-200 p-1 gap-1 rounded-xl bg-brow-300">
            <Button className="hover:bg-gold-400 font-bold text-[14px] px-4">
              Dia
            </Button>
            <Button className="hover:text-gold-400 font-bold text-[14px] bg-transparent text-brow-100 px-4">
              Semana
            </Button>
            <Button className="hover:text-gold-400 font-bold text-[14px] bg-transparent text-brow-100 px-4">
              Mês
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-items-stretch gap-4 mt-8">
          <Card title="Agendamentos hoje" value="4" description="2026-08-27" />
          <Card title="Receita prevista" value="R$ 215" description="sem cancelamentos" />
          <Card title="Pendentes" value="2" description="aguardando confirmação" />
          <Card title="Pendentes" value="2" description="aguardando confirmação" />
        </div>
      </div>
        <div className="p-5">
          <DashboardCharts />
        </div>
    </div>  
  );
}
