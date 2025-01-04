import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const services = [
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ab debitis provident! Sed ad aut excepturi eum? Aspernatur, nesciunt corporis!",
    link: "Learn more",
  },
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ab debitis provident! Sed ad aut excepturi eum? Aspernatur, nesciunt corporis!",
    link: "Learn more",
  },
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ab debitis provident! Sed ad aut excepturi eum? Aspernatur, nesciunt corporis!",
    link: "Learn more",
  },
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ab debitis provident! Sed ad aut excepturi eum? Aspernatur, nesciunt corporis!",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text and image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1  lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a freelance Front-end Developer with 1 years of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <div className="flex-1">
            <div>
              {services.map((services, index) => {
                return (
                  <motion.div
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[976px]">
                      <h4 className="text-[20px] font-primary font-semibold mb-6 tracking-wider">
                        {services?.name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {services?.description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                        href="#"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a className="text-gradient text-sm" href="#">
                        {services?.link}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
