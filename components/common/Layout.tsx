import { GetServerSideProps } from "next";
import { FC, ReactNode } from "react";
import { getAllPokemon } from "../../queries/pokemon";
import Navbar from "../Navbar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default Layout;
