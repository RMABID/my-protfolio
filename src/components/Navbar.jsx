import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquareText, BsClipboardData } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed w-full overflow-hidden z-50 lg:bottom-8 bottom-2">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full mx-w-[460px] flex mx-auto px-5 items-center justify-between text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt></BiHomeAlt>
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser></BiUser>
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsClipboardData></BsClipboardData>
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsBriefcase></BsBriefcase>
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatSquareText></BsChatSquareText>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
