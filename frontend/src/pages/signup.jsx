/* eslint-disable react-hooks/set-state-in-effect */
import { Link } from "react-router";
import logo from "../../public/Logo-Barberpro.svg";
import Separator from "../components/Separator";
import SignupClient from "./SignupClient";
import { SignupOwner } from "./SignupOwner";
import { useState } from "react";

export function Signup() {
  /* const [changeType, setChangeType] = useState("password"); */
  const [active, setActive] = useState("client");

  return (
    <div className="relative min-h-screen">
      <header className="md:absolute md:z-999 md:p-4 md:mt-10 md:ml-5 flex justify-center p-6">
        <img src={logo} alt="Logo barber pro" />
      </header>

      <div className="flex flex-row min-h-screen">
        <div
          className={`
            hidden md:flex flex-1 min-h-screen
            ${
              active === "client"
                ? "bg-[url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=1100&fit=crop&auto=format')]"
                : "bg-[url('https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=1100&fit=crop&auto=format')]"
            }
            bg-cover bg-top
            relative
            after:absolute after:inset-0
            after:bg-gradient-to-b
            after:from-black/30
            after:via-black/50
            after:to-black
            flex
            items-center
          `}
        >
          <div className="w-max-[500px] p-10 z-999">
            <Separator />
            <h1 className="text-brow-100 font-display text-4xl">
              {active === "client"
                ? "Crie sua conta."
                : "Faça seu negócio crescer."}
            </h1>
            <span className="text-brow-200">
              {active === "client"
                ? "Rápido, fácil e sem complicação."
                : "Gerencie sua agenda e faturamento em um só lugar."}
            </span>
          </div>
        </div>

        <form className="w-full w-max-[350px] md:w-125 flex flex-1 flex-col justify-center gap-2.5 p-4">
          <nav className="bg-gray-300 w-full border border-gray-300 rounded-xl p-1 flex items-center justify-between gap-1.25">
            <div
              onClick={() => setActive("client")}
              className={`${active === "client" ? "bg-gold-500 text-center text-gray-500 w-full rounded-xl p-2" : "bg--gray-300 text-center text-brow-200 w-full rounded-xl p-2 hover:text-brow-100"}`}
            >
              Sou Cliente
            </div>
            <div
              onClick={() => setActive("owner")}
              className={`${active === "owner" ? "bg-gold-500 text-center text-gray-500 w-full rounded-xl p-2" : "bg-gray-300 text-center text-brow-200 w-full rounded-xl p-2 hover:text-brow-100"}`}
            >
              Barbeiro/Barbearia
            </div>
          </nav>
          
          {active === "client" && <SignupClient />}
          {active === "owner" && <SignupOwner />}

          <div className="text-center">
            Já tem conta?{" "}
            <Link to="/" className="text-gold-500">
              Entrar
            </Link>
          </div>
          {active === "client" && (
            <div className="text-center">
              É barbeiro?{" "}
              <Link
                to="#"
                onClick={() => setActive("owner")}
                className="text-gold-500"
              >
                Cadastre sua barbearia
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
