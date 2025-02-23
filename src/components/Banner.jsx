import { TypeAnimation } from "react-type-animation";
import banner_img from "../assets/abid.png";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import cv from "../assets/Resume_of_Abid_Ali_Imran.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              RM <span>ABID</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[26px] lg:text-[50px] font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Frontend Developer", 2000, "Web Developer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              a passionate Frontend Developer crafting responsive, user-friendly
              web interfaces with clean code, creativity, and modern design
              principles
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a href={cv}>
                <button className="btn hover:scale-110 transition-all duration-700 ease-linear flex items-center gap-x-2 btn-lg">
                  Download CV{" "}
                  <span className="text-xl">
                    <MdOutlineFileDownload />
                  </span>
                </button>
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-16 max-w-max mx-auto lg:mx-0 "
            >
              <a href="https://www.youtube.com/@RMabid3045">
                <FaYoutube></FaYoutube>
              </a>
              <a href="https://github.com/RMABID">
                <FaGithub></FaGithub>
              </a>
              <a href="https://www.facebook.com/r.m.imran.53983">
                <FaFacebook></FaFacebook>
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img
              className="rounded-full hover:w-[480px] hover:h-[480px] border-accent hover:border hover:scale-110 transition-all duration-700 ease-in-out"
              src={banner_img}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
