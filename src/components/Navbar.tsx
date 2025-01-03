import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <div className="text-3xl font-bold text-teal-300">
          <Link href="/">Shaikh&apos;s Store</Link>
        </div>
        <div>
          <Link href="/cart">
            <FaShoppingCart className="inline-block text-white mr-2" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
