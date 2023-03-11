import { NosotrosType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import NosotrosPage from "./NosotrosPage";
import ActionButton from "@/shared/ActionButton";

const nosotros: Array<NosotrosType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Galletitas y Cupcakes",
    description:
      "En nuestra pastelería para mascotas, ofrecemos galletitas y cupcakes deliciosos y saludables para que tu mascota pueda disfrutar de un snack sin comprometer su salud. Elaborados con ingredientes naturales y frescos.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Tortas de Cumpleaños",
    description:
      "Celebra el cumpleaños de tu mascota con una deliciosa torta hecha especialmente para él, del sabor que elijas. En nuestra pastelería para mascotas, ofrecemos tortas de cumpleaños hechas con ingredientes naturales y frescos.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Helados",
    description:
      "En nuestra pastelería para mascotas, también ofrecemos opciones de helados para que tu mascota pueda disfrutar de un dulce y refrescante postre. Todos nuestros helados son elaborados con ingredientes naturales y frescos.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function openWhatsApp() {
  const phoneNumber = "1164185598"; // Reemplaza con el número de teléfono del usuario
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  window.open(url, "_blank");
}

const Nosotros = ({ setSelectedPage }: Props) => {
  return (
    <section id="nosotros" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Nosotros)}
      >
        {/* header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MÁS QUE SOLO UNA PASTELERÍA</HText>
          <p className="my-5 text-sm">
            En nuestra pastelería para mascotas también nos preocupamos por su salud y bienestar.
            Tenemos una gran variedad de opciones de snacks, galletitas, cupcakes y tortas de cumpleaños,
            todo hecho con ingredientes naturales y frescos.
            Además, ofrecemos opciones de helados para que tu mascota pueda disfrutar de un dulce refrescante.
          </p>
        </motion.div>

        {/* benefits */}
        <div className="md: flex-wrap md:flex-wrap md:flex justify-center">
          <motion.div
            className=" mt-5 justify-between gap-8 md:flex w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {nosotros.map((nosotros: NosotrosType) => (
              <NosotrosPage
                key={nosotros.title}
                icon={nosotros.icon}
                title={nosotros.title}
                description={nosotros.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
          <motion.div
            className="mt-5 justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          ></motion.div>
        </div>

        {/* graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphic */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          {/* description */}
          <div>
            {/*title */}
            <div>
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    CIENTOS DE PERSONAS ENTRENANDO{" "}
                    <span className="text-primary-500">FELICES</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/*descript */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="mt-5">
              Nuestro objetivo principal es asegurarnos de que tus mascotas 
              reciban la mejor calidad de ingredientes naturales para mantenerlos saludables y felices.
              </p>
              <p className="mb-5">
              Somos una familia de amantes de las mascotas que disfrutamos lo que hacemos y estamos rodeados de otros 
              que comparten nuestra pasión por el cuidado de los amigos peludos. 
              Nos esforzamos por ofrecer productos que no solo sean deliciosos sino también seguros y saludables 
              para tu mascota, porque para nosotros, su bienestar es nuestra prioridad. 

              ¡Contactanos y descubrí todo lo que tenemos para ofrecer!
              </p>
            </motion.div>
            {/*button */}
            <div className="relative mt-16">
              <div className="cursor-pointer"  onClick={openWhatsApp}>
                <ActionButton setSelectedPage={setSelectedPage}>
                  ¡Contactanos!
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Nosotros;
