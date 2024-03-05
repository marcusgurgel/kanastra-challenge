import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Header } from ".";

function Layout(): ReactElement {
  return (
    <>
      <main className="h-screen w-screen  p-6 flex flex-col gap-8  bg-zinc-800 text-white">
        <Header />
        <Outlet />
      </main>
    </>
  );
}

export { Layout };
