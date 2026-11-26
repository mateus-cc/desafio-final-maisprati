import { useEffect, useState } from "react";
import { Link } from "react-router";

const API_URL = "http://localhost:8080";

export function Home() {
  const [barbearias, setBarbearias] = useState([]);
  const [agendamentos, setAgendamentos] = useState([]);

  // ViaCEP
  const [cep, setCep] = useState("");
  const [localizacao, setLocalizacao] = useState(null);
  const [erroCep, setErroCep] = useState("");
  const [buscandoCep, setBuscandoCep] = useState(false);

  // Campos do formulário
  const [barbeariaId, setBarbeariaId] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [telefoneCliente, setTelefoneCliente] = useState("");
  const [servico, setServico] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [mensagem, setMensagem] = useState("");

  const distanciasSimuladas = ["0,8 km", "1,5 km", "2,3 km", "3,1 km"];

  async function carregarDados() {
    try {
      const [resBarbearias, resAgendamentos] = await Promise.all([
        fetch(`${API_URL}/barbearias`),
        fetch(`${API_URL}/agendamentos`),
      ]);
      const dataBarbearias = await resBarbearias.json();
      const dataAgendamentos = await resAgendamentos.json();

      setBarbearias(dataBarbearias);
      setAgendamentos(dataAgendamentos);
      if (dataBarbearias.length > 0 && !barbeariaId) {
        setBarbeariaId(String(dataBarbearias[0].id));
      }
    } catch (err) {
      console.error("Erro ao conectar na API:", err);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  async function handleBuscarCep(e) {
    e.preventDefault();
    setErroCep("");
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      setErroCep("Digite um CEP válido com 8 números.");
      return;
    }

    setBuscandoCep(true);
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await res.json();

      if (data.erro) {
        setErroCep("CEP não encontrado.");
        setLocalizacao(null);
      } else {
        setLocalizacao({
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          uf: data.uf,
        });
      }
    } catch {
      setErroCep("Erro ao consultar a API ViaCEP.");
    } finally {
      setBuscandoCep(false);
    }
  }

  async function handleAgendar(e) {
    e.preventDefault();
    setMensagem("");

    try {
      const res = await fetch(`${API_URL}/agendamentos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nomeCliente,
          telefoneCliente,
          servico,
          dataHora,
          barbearia: { id: Number(barbeariaId) },
        }),
      });

      if (res.ok) {
        setMensagem("Agendamento realizado com sucesso!");
        setNomeCliente("");
        setTelefoneCliente("");
        setServico("");
        setDataHora("");
        carregarDados();
      } else {
        setMensagem("Erro ao agendar. Verifique os dados.");
      }
    } catch {
      setMensagem("Não foi possível conectar ao servidor.");
    }
  }

  async function handleCancelar(id) {
    await fetch(`${API_URL}/agendamentos/${id}`, { method: "DELETE" });
    carregarDados();
  }

  return (
    <div className="min-h-screen bg-[#121212] text-brow-100 p-6 md:p-10">
      <header className="max-w-6xl mx-auto flex items-center justify-between border-b border-gray-800 pb-6 mb-8">
        <img src="/Logo-Barberpro.svg" alt="Logo BarberPro" className="h-10" />
        <Link
          to="/"
          className="text-sm text-gold-500 border border-gold-500 px-4 py-2 rounded-lg hover:bg-gold-500 hover:text-black transition"
        >
          Sair
        </Link>
      </header>

      <main className="max-w-6xl mx-auto space-y-12">
        {/* 1. BUSCA POR CEP (VIACEP) + BARBEARIAS PRÓXIMAS */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-display text-gold-500">
                Barbearias Próximas
              </h2>
              {localizacao ? (
                <p className="text-sm text-brow-200 mt-1">
                  Exibindo resultados próximos a:{" "}
                  <span className="text-white font-semibold">
                    {localizacao.bairro ? `${localizacao.bairro}, ` : ""}
                    {localizacao.cidade} - {localizacao.uf}
                  </span>
                </p>
              ) : (
                <p className="text-sm text-brow-200 mt-1">
                  Digite seu CEP para localizar as barbearias na sua região.
                </p>
              )}
            </div>

            <form onSubmit={handleBuscarCep} className="flex gap-2">
              <input
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="Digite seu CEP (ex: 13600-000)"
                maxLength={9}
                className="bg-[#1e1e1e] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white w-56"
              />
              <button
                type="submit"
                disabled={buscandoCep}
                className="bg-gold-500 text-black font-bold text-sm px-4 py-2 rounded-lg hover:opacity-90 transition cursor-pointer"
              >
                {buscandoCep ? "Buscando..." : "Buscar"}
              </button>
            </form>
          </div>

          {erroCep && (
            <p className="text-sm text-red-400 mb-4">{erroCep}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {barbearias.map((b, index) => (
              <div
                key={b.id}
                className="bg-[#1e1e1e] border border-gray-800 rounded-xl p-5 flex flex-col justify-between gap-3"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-white">{b.nome}</h3>
                    {localizacao && (
                      <span className="text-xs bg-gold-500/20 text-gold-500 border border-gold-500/40 px-2 py-0.5 rounded-full whitespace-nowrap">
                        a {distanciasSimuladas[index % distanciasSimuladas.length]}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-brow-200 mt-1">
                    {b.endereco}
                    {localizacao ? ` • ${localizacao.cidade}/${localizacao.uf}` : ""}
                  </p>
                  <p className="text-sm text-brow-200">{b.telefone}</p>
                  <p className="text-xs text-gold-500 mt-2">
                    {b.horarioFuncionamento}
                  </p>
                </div>
                <div className="border-t border-gray-800 pt-3">
                  <span className="text-xs uppercase text-brow-200">
                    Serviços e Preços:
                  </span>
                  <p className="text-sm text-white mt-1">{b.servicos}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. FORMULÁRIO DE AGENDAMENTO + LISTA */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form
            onSubmit={handleAgendar}
            className="bg-[#1e1e1e] border border-gray-800 rounded-xl p-6 space-y-4"
          >
            <h2 className="text-2xl font-display text-gold-500">
              Novo Agendamento
            </h2>

            <div>
              <label className="block text-xs uppercase text-brow-200 mb-1">
                Barbearia
              </label>
              <select
                value={barbeariaId}
                onChange={(e) => setBarbeariaId(e.target.value)}
                required
                className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-white"
              >
                {barbearias.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.nome}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase text-brow-200 mb-1">
                Seu Nome
              </label>
              <input
                type="text"
                required
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
                placeholder="Ex: Mateus Costa"
                className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-brow-200 mb-1">
                Telefone
              </label>
              <input
                type="tel"
                required
                value={telefoneCliente}
                onChange={(e) => setTelefoneCliente(e.target.value)}
                placeholder="(19) 99999-9999"
                className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-brow-200 mb-1">
                Serviço
              </label>
              <input
                type="text"
                required
                value={servico}
                onChange={(e) => setServico(e.target.value)}
                placeholder="Ex: Corte Degradê + Barba"
                className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-white"
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-brow-200 mb-1">
                Data e Horário
              </label>
              <input
                type="datetime-local"
                required
                value={dataHora}
                onChange={(e) => setDataHora(e.target.value)}
                className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold-500 text-black font-bold py-3 rounded-lg hover:opacity-90 transition cursor-pointer"
            >
              Confirmar Agendamento
            </button>

            {mensagem && (
              <p className="text-sm text-center text-gold-500 pt-2">
                {mensagem}
              </p>
            )}
          </form>

          {/* MEUS AGENDAMENTOS */}
          <div className="bg-[#1e1e1e] border border-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-display text-gold-500 mb-4">
              Agendamentos Confirmados
            </h2>

            {agendamentos.length === 0 ? (
              <p className="text-brow-200 text-sm">
                Nenhum agendamento realizado ainda.
              </p>
            ) : (
              <div className="space-y-3">
                {agendamentos.map((ag) => (
                  <div
                    key={ag.id}
                    className="bg-[#121212] border border-gray-800 rounded-lg p-4 flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="font-bold text-white">
                        {ag.servico} —{" "}
                        <span className="text-gold-500">
                          {ag.barbearia?.nome}
                        </span>
                      </p>
                      <p className="text-sm text-brow-200">
                        Cliente: {ag.nomeCliente} ({ag.telefoneCliente})
                      </p>
                      <p className="text-xs text-brow-200 mt-1">
                        {new Date(ag.dataHora).toLocaleString("pt-BR")}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCancelar(ag.id)}
                      className="text-xs text-red-400 border border-red-400/40 px-3 py-1.5 rounded-lg hover:bg-red-500/20 cursor-pointer"
                    >
                      Cancelar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}