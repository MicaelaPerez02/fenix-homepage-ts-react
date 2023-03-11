import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorAmorAnimales from "../../assets/SponsorAmorAnimales.png";
import SponsorEnvios from "../../assets/SponsorEnvios.png";
import SponsorFreshFood from "../../assets/SponsorFreshFood.png";
import SponsorNat from "../../assets/SponsorNat.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Inicio)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:top-15 before:left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Queremos que darle lo mejor a tu mascota. Nuestros snacks son 100% naturales,
              sin conservantes y frescos, sin dejar de ser deliciosos.
              Nos preocupamos por la felicidad y salud de tu mascota. No dudes en probarlos.
              Lomas del Mirador - La Matanza - Buenos Aires
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 mb-10 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p onClick={() => window.open("https://www.instagram.com/pasteleriademascotas/")} className="cursor-pointer">
              <ActionButton setSelectedPage={setSelectedPage}>

                Unite a la comunidad

              </ActionButton>
            </p>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contactanos)}
              href={`#${SelectedPage.Contactanos}`}
            >
              <p>Conoce Más</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/6 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img
            alt="home-pageGraphic"
            src={HomePageGraphic}
            className={`h-21`}
          />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="mt-10 h-[135px] w-full bg-primary-100 pb-10 pt-8">
          <div className="mx-auto w-5/6">
            <div className="flex items-center justify-between gap-6">
              <img alt="sponsor-amor-animales" src={SponsorAmorAnimales} className="w-20 h-15" />
              <img alt="sponsor-envios" src={SponsorEnvios} className="w-20 h-15" />
              <img alt="sponsor-fresh-food" src={SponsorFreshFood} className="w-20 h-15" />
              <img alt="sponsor-100%-naturales" src={SponsorNat} className="w-20 h-15" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
