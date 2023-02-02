import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, isMenuActive] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}

            <img alt="Logo" src={Logo} className={`h-6 w-28`} />
            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} text sm gap-8`}>
                  <Link
                    page="Inicio"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  >
                    Inicio
                  </Link>
                  <Link
                    page="Beneficios"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  >
                    Beneficios
                  </Link>
                  <Link
                    page="Nuestras clases"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  >
                    Nuestras clases
                  </Link>
                  <Link
                    page="Contactanos"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  >
                    Contactanos
                  </Link>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Registrate</p>
                  <button>Hacete miembro</button>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white"/>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
