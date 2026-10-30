import { HeaderDashboard } from "../components/HeaderDashboard";
import { Input } from "../components/Input";
import {Button} from '../components/Button'
import {Plus} from "lucide-react"
import { Card } from "../components/Card";
import { AppointmentsTable } from "../components/AppointmentsTable";

export function HomeBarber() {
  return (
    <div className="w-full">
      <HeaderDashboard />
      <div className="p-10 w-full">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[14px] text-gold-500 tracking-[3px] uppercase font-mono font-bold">Gerenciamento</p>
            <h2 className="text-brow-100 text-[36px] font-display font-bold leading-10">Atendimentos</h2>
          </div>
          <div>
            <Button className="hover:bg-gold-400 font-bold text-[14px]">
              <Plus size={14} />
              Novo agendamento
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-items-stretch gap-4 mt-8">
          <Card title="Agendamentos hoje" value="4" description="2026-08-27" />
          <Card title="Receita prevista" value="R$ 215" description="sem cancelamentos" />
          <Card title="Pendentes" value="2" description="aguardando confirmação" />
        </div>
        <div className="flex mt-8 w-full items-center justify-between">
          <div className="flex gap-3 w-full">
            <Input type="date"/>
            <select
                value="{}"
                /* onChange={(e) => setExperience(e.target.value)} */
                name="allBarbers"
                id="allBarbers"
                className="w-full bg-brow-500 rounded-xl p-2"
              >
                <option value="">Todos os barbeiros</option>
                <option value="ricardoAlves">Ricardo Alves</option>
                <option value="diegoSantos">Diego Santos</option>
                <option value="marcosLima">Marcos Lima</option>
              </select>
            <select
                value="{}"
                /* onChange={(e) => setExperience(e.target.value)} */
                name="allStatus"
                id="allStatus"
                className="w-full bg-brow-500 rounded-xl p-2"
              >
                <option value="">Todos os statos</option>
                <option value="confirmados">Confirmados</option>
                <option value="pendentes">Pendentes</option>
                <option value="cancelados">Cancelados</option>
                <option value="concluidos">Concluídos</option>
              </select>
          </div>
          <span className="font-body text-[14px] text-brow-300 w-full text-right">
            5 resultados
          </span>
        </div>
      </div>
        <AppointmentsTable />
    </div>
  );
}
