import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="lg:section py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex-1">
            <div>
              <h4 className="text-4xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <p className="text-xl font-light text-white">
                Have a question or want to work together? Drop us a message!
              </p>
              <div className="flex flex-col gap-6 my-12">
                <div className="flex items-center  gap-4">
                  <p className="w-14 h-14 rounded-xl bg-[#1E1D3E] flex items-center justify-center border">
                    <MdEmail />
                  </p>
                  <div>
                    <p className="text-xl font-medium">Email</p>
                    <p className="text-lg text-white/60">
                      mdabidaliimran@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center  gap-4">
                  <p className="w-14 h-14 rounded-xl bg-[#1E1D3E] flex items-center justify-center border">
                    <IoLocationSharp />
                  </p>
                  <div>
                    <p className="text-xl font-medium">Location</p>
                    <p className="text-lg text-white/60">
                      Netrokona,Mymensingh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* form */}

          <form className="flex-1 border rounded-xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white transition-all focus:border-accent"
              name=""
              placeholder="Your Name"
              id=""
            />
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white transition-all focus:border-accent"
              name=""
              placeholder="Your Email"
              id=""
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white transition-all focus:border-accent resize-none mb-12"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
