import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { TabNav } from "../components/TabNav";

export function Login() {
  const [changeType, setChangeType] = useState("password");
  return (
    <div className="flex flex-row">
      <div className="flex-1 min-h-screen bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=1100&fit=crop&auto=format')] bg-cover bg-top-center">
        
      </div>
    
    <form className="w-125 flex flex-1 flex-col justify-center gap-2.5 p-4">
      <TabNav />
      <Input label="E-MAIL" type="email" placeholder="E-mail" />
      <Input
        label="SENHA"
        type={changeType}
        placeholder="********"
        onChangeType={() =>
          changeType === "password"
            ? setChangeType("text")
            : setChangeType("password")
        }
      />
      <div className="flex justify-between m-4">
        <div className="flex items-center gap-1">
          <input id="remember" type="checkbox" />
          <label htmlFor="remember" className="text-[12px] text-brow-200">
            Lembrar de mim
          </label>
        </div>
        <a href="/" className="text-gold-500 hover:text-gold-400">
          Esqueci a senha
        </a>
      </div>
      <Button>Entrar</Button>
      <div className="text-center">
        Não tem conta? <a href="/" className="text-gold-500">Cadastrar-se</a>
      </div>
    </form>
    </div>
  );
}
