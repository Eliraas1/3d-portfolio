import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { sendForm } from "@emailjs/browser";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { EarthCanvas } from "../canvas";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const SEC = 1000;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = async () => {
    const { status, text } = await sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current!,
      PUBLIC_KEY
    );
    const isSuccess = status === 200 || text === "OK";
    setSuccess(isSuccess);
    setLoading(false);
    !formRef?.current?.reset();
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef?.current) return;
    setLoading(true);
    sendEmail();
  };

  useEffect(() => {
    if (success) return;

    const timer = setTimeout(() => {
      setSuccess(true);
    }, 10 * SEC);
    return () => clearInterval(timer);
  }, [success]);

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
        {!success && (
          <h1 className="text-red-400 text-center ">
            I'm sorry, but there was an error sending your message. Please try
            again later or contact through alternative means. I'm apologize for
            any inconvenience caused
          </h1>
        )}
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
