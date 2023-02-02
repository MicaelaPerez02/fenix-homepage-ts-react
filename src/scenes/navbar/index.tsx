import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}

            <img alt="Logo" src={Logo} className={`w-28 h-6`}/>
            {/* right side */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} text sm gap-8`}>
                <p>Inicio</p>
                <p>Beneficios</p>
                <p>Nuestras clases</p>
                <p>Contactanos</p>
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Registrate</p>
                <button>Hacete miembro</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
