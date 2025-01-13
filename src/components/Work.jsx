import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-12 lg:mb-0 mb-10"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work
              </h2>
              <p className="max-w-sm mb-16">
                Showcasing my latest work, blending creativity and innovation
                with attention to detail, delivering impactful designs and
                functional solutions.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            // viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* img2 */}
            <a href="https://courageous-valkyrie-73be1a.netlify.app/">
              <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img2}
                  alt=""
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">UI/UX Design</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </div>
            </a>
            {/* img2 */}
            <a href="https://heroic-parfait-d0bf72.netlify.app/">
              <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img3}
                  alt=""
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-32 transition-all duration-500 z-50">
                  <span className="text-gradient">Forever.</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    Project Title : E-Commerce WebSite
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
