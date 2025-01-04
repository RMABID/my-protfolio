import { Link } from "react-scroll";

const Header = () => {
  return (
    <header id="/" className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link
            className="text-gradient cursor-pointer text-4xl btn-link"
            to="/"
          >
            RM Abid
          </Link>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
