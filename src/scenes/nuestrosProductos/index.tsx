import { NuestrosProductosType, SelectedPage } from "@/shared/types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import NuestrosProductosPage from "./NuestrosProductosPage";

const productos: Array<NuestrosProductosType> = [
  {
    name: "Cupcakes",
    image: image1,
  },
  {
    name: "Galletas",
    image: image2,
  },
  {
    name: "Tortas",
    image: image3,
  },
  {
    name: "Helados",
    image: image4,
  }
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const NuestrosProductos = ({ setSelectedPage }: Props) => {
  return (
    <section id="nuestrosproductos" className="w-full bg-primary-100 py-12">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.NuestrosProductos)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>NUESTROS PRODUCTOS</HText>
            <p className="py-5">
              {" "}
              Ofrecemos una variedad de deliciosas opciones de repostería para satisfacer los gustos de tu amigo peludo. 
              Desde galletitas y cupcakes hasta tortas y helados. 
              ¡Mira!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="whitespace-nowrap" >
            {productos.map((item: NuestrosProductosType, index) => (
              <NuestrosProductosPage
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default NuestrosProductos;
