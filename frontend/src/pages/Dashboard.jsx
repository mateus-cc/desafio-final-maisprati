import { DashboardClient } from "./DashboardClient";
import { HomeBarber } from "./HomeBarber";
import { NotFound } from "./NotFound";

export function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.role === "CLIENT") {
    return <DashboardClient />;
  }

  if (user?.role === "OWNER") {
    return <HomeBarber />;
  }

  return <NotFound />;
}
