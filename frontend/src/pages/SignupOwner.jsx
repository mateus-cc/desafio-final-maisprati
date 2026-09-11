import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ProgressBar } from "../components/ProgressBar";

export function SignupOwner() {
  // DADOS DO BARBEIRO
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");

  // DADOS DA BARBEARIA
  const [nameBarber, setNameBarber] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [experience, setExperience] = useState("");
  const [opensAt, setOpensAt] = useState("");
  const [closesAt, setClosesAt] = useState("");
  const [services, setServices] = useState([]);

  // ACESSO
  const [changeType, setChangeType] = useState("password");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  // ETAPA ATUAL
  const [step, setStep] = useState(1);

  // SERVIÇOS DISPONÍVEIS
  const servicesArr = [
    "Corte Masculino",
    "Barba",
    "Degradê / Fade",
    "Coloração",
    "Tranças",
    "Tratamentos Capilares",
  ];

  // VALIDAÇÃO DAS ETAPAS
  const stepOneValid =
    name.trim() && email.trim() && phone.trim() && cpf.trim();

  const stepTwoValid =
    nameBarber.trim() &&
    address.trim() &&
    number.trim() &&
    city.trim() &&
    experience &&
    opensAt &&
    closesAt;

  const stepThreeValid =
    password.trim() &&
    confirmPassword.trim() &&
    password === confirmPassword &&
    terms;

  // PROGRESS BAR
  const progressStepTwo = step >= 2 ? "" : "border-brow-300";

  const progressStepThree = step >= 3 ? "" : "border-brow-300";

  return (
    <div>
      <div className="mb-4">
        {" "}
        <h2 className="text-brow-100 font-display text-3xl">
          Cadastro profissional{" "}
        </h2>
        ```
        <span className="text-brow-200 text-[14px]">
          Cadastre sua barbearia e comece a receber agendamentos online.
        </span>
      </div>
      <div className="flex gap-2">
        <ProgressBar />

        <ProgressBar className={progressStepTwo} />

        <ProgressBar className={progressStepThree} />
      </div>
      {step === 1 && (
        <div>
          <span className="uppercase text-brow-200 text-[12px]">
            Passo 1 — Dados do barbeiro
          </span>

          <Input
            label="NOME COMPLETO"
            value={name}
            placeholder="Carlos de Oliveira"
            onChange={(e) => setName(e.target.value)}
          />

          <div className="flex gap-4 w-full">
            <Input
              label="E-MAIL"
              type="email"
              value={email}
              placeholder="barbeiro@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Telefone"
              type="tel"
              value={phone}
              placeholder="(99) 99999-9999"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <Input
            label="CPF"
            value={cpf}
            placeholder="000.000.000-00"
            onChange={(e) => setCpf(e.target.value)}
          />

          <Button
            disabled={!stepOneValid}
            className={`${stepOneValid ? "opacity-100" : "opacity-70"} mt-5`}
            onClick={() => setStep(2)}
          >
            Continuar <MoveRight />
          </Button>
        </div>
      )}
      {step === 2 && (
        <div>
          <span className="uppercase text-brow-200 text-[12px]">
            Passo 2 — Barbearia
          </span>

          <Input
            label="Nome da barbearia"
            placeholder="BarberPro Studios"
            value={nameBarber}
            onChange={(e) => setNameBarber(e.target.value)}
          />

          <div className="flex gap-4">
            <Input
              label="Endereço"
              placeholder="Rua das Rosas"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <Input
              label="Número"
              placeholder="999"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <Input
            label="Cidade"
            placeholder="Araçuaí"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="experience" className="text-brow-200 text-sm">
            Experiência
          </label>

          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            name="experience"
            id="experience"
            className="w-full"
          >
            <option value="">Selecione</option>
            <option value="menosDeUm">menos de 1 ano</option>
            <option value="umATres">1-3 anos</option>
            <option value="tresACinco">3-5 anos</option>
            <option value="cincoADez">5-10 anos</option>
            <option value="maisDeDez">mais de 10 anos</option>
          </select>

          <div className="flex gap-4">
            <Input
              label="Abre às"
              type="time"
              value={opensAt}
              onChange={(e) => setOpensAt(e.target.value)}
            />

            <Input
              label="Fecha às"
              type="time"
              value={closesAt}
              onChange={(e) => setClosesAt(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <span className="text-brow-200 text-sm">Serviços oferecidos</span>

            <div className="flex flex-wrap gap-2 mt-2">
              {servicesArr.map((service) => {
                const selected = services.includes(service);

                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => {
                      setServices((prev) =>
                        selected
                          ? prev.filter((item) => item !== service)
                          : [...prev, service],
                      );
                    }}
                    className={`px-3 py-2 rounded-lg border ${
                      selected
                        ? "bg-gold-500 text-gray-500"
                        : "border-brow-300 text-brow-200"
                    }`}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 mt-5">
            <Button
              className="flex-1 bg-transparent border border-brow-200 text-brow-200"
              onClick={() => setStep(1)}
            >
              <MoveLeft />
            </Button>

            <Button
              disabled={!stepTwoValid}
              className={`${
                stepTwoValid ? "opacity-100" : "opacity-70"
              } flex-[3]`}
              onClick={() => setStep(3)}
            >
              Continuar <MoveRight />
            </Button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <span className="uppercase text-brow-200 text-[12px]">
            Passo 3 — Acesso
          </span>

          <Input
            label="Senha"
            type={changeType}
            value={password}
            placeholder="Mínimo 8 caracteres"
            onChange={(e) => setPassword(e.target.value)}
            onChangeType={() =>
              setChangeType((prev) =>
                prev === "password" ? "text" : "password",
              )
            }
          />

          <Input
            label="Confirmar senha"
            type={changeType}
            value={confirmPassword}
            placeholder="Repetir senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            onChangeType={() =>
              setChangeType((prev) =>
                prev === "password" ? "text" : "password",
              )
            }
          />

          {password && confirmPassword && password !== confirmPassword && (
            <span className="text-red-500 text-xs">
              As senhas não coincidem.
            </span>
          )}

          <div className="mt-3 flex gap-1 items-start">
            <input
              id="terms"
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />

            <label htmlFor="terms" className="text-sm text-brow-200">
              Concordo com os{" "}
              <Link to="#" className="text-gold-500 hover:underline">
                Termos de Uso
              </Link>{" "}
              e{" "}
              <Link to="#" className="text-gold-500 hover:underline">
                Política de Privacidade
              </Link>
            </label>
          </div>

          <div className="flex items-center justify-center gap-4 mt-5">
            <Button
              className="flex-1 text-center bg-transparent border border-brow-200 text-brow-200 hover:text-brow-100"
              onClick={() => setStep(2)}
            >
              <MoveLeft />
            </Button>

            <Button
              disabled={!stepThreeValid}
              className={`${
                stepThreeValid ? "opacity-100" : "opacity-70"
              } flex-[3]`}
              onClick={() => {
                console.log("Criar conta");
                console.log({
                  name,
                  email,
                  phone,
                  cpf,
                  nameBarber,
                  address,
                  number,
                  city,
                  experience,
                  opensAt,
                  closesAt,
                  services,
                  password,
                });
              }}
            >
              Criar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
