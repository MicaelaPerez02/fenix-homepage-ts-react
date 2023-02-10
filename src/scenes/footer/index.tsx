import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" className={`h-6 w-28`} />
          <p className="my-5">
            Gracias por visitarnos, esperamos verte pronto!
          </p>
          <p>© Fenix Centro de Entrenamiento. All rights reserved </p>
        </div>
        <div className="mt-10 basis-1/4 md:mt-0">
          <h4 className="font-bold py-2" >Links</h4>
          <a
            target="_blank"
            className="my-5 text-decoration-none"
            href="https://www.instagram.com/fenix_entrenamiento_/"
          >
            Instagram
          </a>
         <p className="py-2"></p> 
          <a
            target="_blank"
            className="my-5 text-decoration-none"
            href="https://goo.gl/maps/hzxKGd6ZKAdbqRDy8"
          >
            Mapa
          </a>
        </div>
        <div className="mt-10 basis-1/4 md:mt-0">
          <h4 className="font-bold pt-2">Contactanos</h4>
          <p className="my-5">+54 11 2184-6416</p>
          <p className="my-5">
            Emilio Mitre 836, Ramos Mejia, Provincia de Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
