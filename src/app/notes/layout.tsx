import { ReactNode } from "react";
import NavBar from "./NavBar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <main className="m-auto max-w-7xl p-4">{children}</main>
    </>
  );
};

export default Layout;
