import { Link, useLocation } from "react-router";
export function HeaderDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  return (
    <header className="flex items-center justify-between p-5 border-b border-brow-300">
      <img src="../../public/Logo-Barberpro.svg" alt="Logo barber pro" />
      <div className="text-brow-100 text-3xl">
        {user.role === "CLIENT" ? (
          <div className="p-1 border border-brow-300 bg-gray-300 rounded-xl">
            <p className="text-gray-500 py-2 px-4 font-bold border border-gold-500 bg-gold-500 rounded-xl text-[16px]">
              Minha agenda
            </p>
          </div>
        ) : (
          <div className="p-1 border border-brow-300 rounded-xl bg-gray-300 flex gap-2">
            <Link
              to={"/home-barber"}
              className={` ${location.pathname === "/home-barber" ? "text-gray-500 border-gold-500 bg-gold-500" : "text-brow-200 hover:text-brow-100"}  py-2 px-4 font-bold   rounded-xl text-[16px]`}
            >
              Gerenciar
            </Link>
            <Link
              to={"/dashboard-barber"}
              className={` ${location.pathname === "/dashboard-barber" ? "text-gray-500 border-gold-500 bg-gold-500" : "text-brow-200 hover:text-brow-100"}  py-2 px-4 font-bold rounded-xl text-[16px]`}
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col items-end ">
          <p className="text-[12px] font-bold text-brow-100">Ricardo Alves</p>
          <p className="text-[12px] text-brow-200">
            {user.role === "CLIENT" ? "Cliente" : "Proprietário"}
          </p>
        </div>
        <div className="text-gold-500 font-bold text-[14px] bg-brow-300 w-[32px] h-[32px] rounded-full flex items-center justify-center p-2">
          R
        </div>
        <div>
          <button className="border border-brow-300 text-[12px] text-brow-200 px-2 py-1 rounded hover:border-gold-700 hover:text-brow-100">
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}
