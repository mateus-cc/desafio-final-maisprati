import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ProgressBar } from "../components/ProgressBar";

export default function SignupClient() {
  // DADOS PESSOAIS
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // ACESSO
  const [changeType, setChangeType] = useState("password");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  // ETAPA DO CADASTRO
  const [partTwoRegister, setPartTwoRegister] = useState(true);

  // VALIDAÇÃO DA ETAPA 1
  const stepOneValid =
    name.trim() !== "" && email.trim() !== "" && phone.trim() !== "";

  // VALIDAÇÃO DA ETAPA 2
  const stepTwoValid =
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    password === confirmPassword &&
    terms;

  return (
    <div>

      <div className="mb-4">
        <h2 className="text-brow-100 font-display text-3xl">Criar conta </h2>
        <span className="text-brow-200 text-[14px]">
          Crie sua conta gratuita em menos de 2 minutos.
        </span>
      </div>

      <div className="flex gap-2">
        <ProgressBar />

        <ProgressBar className={partTwoRegister ? "border-brow-300" : ""} />
      </div>

      {partTwoRegister ? (
        <div>
          <span className="uppercase text-brow-200 text-[12px]">
            Passo 1 de 2 — Dados pessoais
          </span>

          <Input
            label="NOME COMPLETO"
            type="text"
            value={name}
            placeholder="Carlos de Oliveira"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="E-MAIL"
            type="email"
            value={email}
            placeholder="seu@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Telefone"
            type="tel"
            value={phone}
            placeholder="(99) 99999-9999"
            onChange={(e) => setPhone(e.target.value)}
          />

          <Button
            disabled={!stepOneValid}
            className={`${stepOneValid ? "opacity-100" : "opacity-70"} mt-5`}
            onClick={() => setPartTwoRegister(false)}
          >
            Continuar <MoveRight />
          </Button>
        </div>
      ) : (

        <div className="block gap-2">
          <span className="uppercase text-brow-200 text-[12px]">
            Passo 2 de 2 — Acesso
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
            placeholder="Repetir senha."
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

          <div className="mt-1.5 flex gap-1">
            <input
              id="terms"
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />

            <label htmlFor="terms">
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
              disabled={false}
              className="flex-1 text-center bg-transparent border border-brow-200 text-brow-200 hover:text-brow-100"
              onClick={() => setPartTwoRegister(true)}
            >
              <MoveLeft />
            </Button>

            <Button
              disabled={!stepTwoValid}
              className={
                stepTwoValid ? "opacity-100 flex-[3]" : "opacity-70 flex-[3]"
              }
              onClick={() => {
                console.log("Criar conta");

                console.log({
                  name,
                  email,
                  phone,
                  password,
                  confirmPassword,
                  terms,
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
