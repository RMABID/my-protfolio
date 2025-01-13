import Lottie from "lottie-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import about_animation from "../assets/lottie/about lottie.json";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 justify-between ">
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              // viewport={{ once: false, amount: 0.7 }}
            >
              <Lottie animationData={about_animation}></Lottie>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              // viewport={{ once: false, amount: 0.7 }}
              className="flex items-center justify-start gap-4 my-6"
            >
              <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                {inView ? <CountUp start={0} end={1} duration={3} /> : null}
              </div>
              <div className="font-primary text-sm tracking-[2px] ">
                Years of <br /> Experiences
              </div>
              <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
              </div>
              <div className="font-primary text-sm tracking-[2px] ">
                Projects <br /> Completed
              </div>
            </motion.div>
          </div>
          <div className="flex-1">
            <motion.h1
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              // viewport={{ once: false, amount: 0.7 }}
              className="h2 text-accent mb-6"
            >
              About Me
            </motion.h1>
            <motion.p
              className="font-secondary "
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              // viewport={{ once: false, amount: 0.7 }}
            >
              Hello, I’m Abid, a passionate frontend developer with a strong
              foundation in web development. I have a keen interest in building
              dynamic and responsive websites and applications that provide
              seamless user experiences. With a focus on frontend technologies,
              I specialize in using React.js to create interactive and modern
              user interfaces. My skills in Tailwind CSS allow me to quickly
              design visually appealing, responsive layouts with ease. In
              addition to my frontend expertise, I have a basic understanding of
              Node.js and MongoDB, which allows me to explore full-stack
              development. I enjoy learning and experimenting with new
              technologies to expand my skill set and improve the performance
              and scalability of my projects. As a student, I’m constantly
              seeking opportunities to enhance my knowledge through practical
              experience, online courses, and collaborating with others in the
              development community. I believe in the importance of clean,
              efficient code and always strive to make the development process
              as smooth as possible, whether I’m working solo or as part of a
              team. I’m excited to continue growing as a developer and
              contribute to innovative projects that solve real-world problems.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
