import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { sendForm } from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

interface FormFieldProps {
  name: string;
  label: string;
  onChange?: (value: string) => void;
}
const FormField: React.FC<FormFieldProps> = () => {
  return <label></label>;
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef?.current) return;
    setLoading(true);

    sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          setSuccess(true);
          console.log(result.text);
        },
        (error) => {
          setSuccess(false);
          console.log({ error: error.text });
        }
      )
      .finally(() => {
        setLoading(false);
        formRef?.current?.reset();
      });
  };
  return (
    <div className="flex xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-visible">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col mt-12 gap-8"
        >
          <label className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <textarea
              placeholder="Write your message"
              rows={7}
              name="message"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-6 px-8 font-bold w-fit shadow-sm shadow-primary outline-none rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
