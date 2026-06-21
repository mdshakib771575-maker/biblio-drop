import Link from "next/link";
import { BiBookReader } from "react-icons/bi";
import { FaTicketAlt } from "react-icons/fa";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-pink-500 to-purple-500 p-2 rounded-lg text-white  shadow-md shadow-pink-500/20">
               
                <BiBookReader className="text-xl" />
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-pink-600 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              BiblioDrop    
            </span>
        </Link>
    );
};

export default Logo;