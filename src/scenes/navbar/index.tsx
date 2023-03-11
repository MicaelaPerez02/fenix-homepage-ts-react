import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-primary-100 bg-opacity-90 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-2`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}

            <img alt="Logo" src={Logo} className={`h-13 w-28`} />
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
                    page="Nosotros"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  >
                    Beneficios
                  </Link>
                  <Link
                    page="Nuestros Productos"
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
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Sumate a la comunidad
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* menu items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
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
              Nosotros
            </Link>
            <Link
              page="Nuestras clases"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            >
              Nuestros Productos
            </Link>
            <Link
              page="Contactanos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            >
              Contactanos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
