import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BrandName. All rights reserved.
        </div>

        <div className="text-sm text-gray-400">Made by Yousuf</div>
        <div className="space-x-6 my-3 flex sm:my-0">
          <a
            href="https://www.facebook.com/profile.php?id=100058908816483"
            className="text-gray-400 hover:text-teal-500 transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/ShaikhYousuf39/"
            className="text-gray-400 hover:text-teal-500 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/just_.yousuf/"
            className="text-gray-400 hover:text-teal-500 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
