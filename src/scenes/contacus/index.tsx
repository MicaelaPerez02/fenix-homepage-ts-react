import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import { useState } from "react";
import Modal from "react-modal";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg px-5 py-3 placeholder-white bg-primary-500 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50`;
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();

    } else {
      setShowModal(true);

      console.log("Form submitted", showModal);
    }
  };

  return (
    <section id="contactanos" className="mx-auto w-5/6 pt-12">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contactanos)}
      >
        {/* header */}
        <motion.div
          className="md:w-3/5"
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
            <span className="text-primary-500">Contactanos ahora</span>
            {""} y comenza a disfrutar con tu mascota
          </HText>
          <p className="my-5">
            Consultanos todo lo que necesites saber, estamos para ayudarte.
          </p>
        </motion.div>
        {/*form and image */}
        <div className="mt-10 justify-between gap-8 md:flex">

          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/b974249af20be81bee72fa8ccb4dde46"
              method="POST"
              data-netlify="true"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NOMBRE"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "Este campo es requerido"}
                  {errors.name.type === "maxLength" &&
                    "El máximo de letras es de 100 caracteres"}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "Este campo es requerido"}
                  {errors.email.type === "pattern" && "Mail invalido."}
                </p>
              )}

              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MENSAJE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "Este campo es requerido"}
                  {errors.message.type === "maxLength" &&
                    "El máximo es de 200 caracteres."}
                </p>
              )}

              <button
                type="submit"
                name="_captcha"
                value="false"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                ENVIAR
              </button>
              {showModal ? (
                // muestra el modal si showModal es true
                <Modal
                  isOpen={showModal}
                  onRequestClose={() => setShowModal(false)}
                  closeTimeoutMS={500}
                  ariaHideApp={false}
                  style={{
                    overlay: {
                      backgroundColor: "rgba(0,0,0,0.5)",
                      zIndex: 999,
                    },
                    content: {
                      top: "50%",
                      left: "50%",
                      right: "auto",
                      bottom: "auto",
                      marginRight: "-50%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "#F3F4F6",
                      boxShadow:
                        "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 30px -10px rgba(0, 0, 0, 0.15)",
                      borderRadius: "0.75rem",
                      padding: "3rem",
                      textAlign: "center",
                    },
                  }}
                >
                  <h2 className="mb-6">Mensaje enviado correctamente</h2>
                  <button type="button" onClick={() => setShowModal(false)} className="bg-primary-100 rounded-md p-2 cursor-pointer">Cerrar</button>
                </Modal>
              ) : null}
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 w-4 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div>
              <img
                className="md:w-full md:h-full md:object-cover hidden"
                alt="contact us page graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
