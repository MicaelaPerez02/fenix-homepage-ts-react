import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
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
          <h4 className="py-2 font-bold">Links</h4>
          <a
            target="_blank"
            className="text-decoration-none my-5"
            href="https://www.instagram.com/fenix_entrenamiento_/"
          >
            Instagram
          </a>
          <p className="py-2"></p>
          <a
            target="_blank"
            className="text-decoration-none my-5"
            href="https://goo.gl/maps/hzxKGd6ZKAdbqRDy8"
          >
            Mapa
          </a>
        </div>
        <div className="mt-10 basis-1/4 md:mt-0">
          <h4 className="pt-2 font-bold">Contactanos</h4>
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
