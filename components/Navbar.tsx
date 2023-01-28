import { FC } from "react";
import { Image } from "react-bootstrap";

const Navbar: FC = () => {
  return (
    <header>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "180px" }}
      >
        <Image fluid src="../pokedex1.png" alt="pokedex" />
      </div>
    </header>
  );
};

export default Navbar;
