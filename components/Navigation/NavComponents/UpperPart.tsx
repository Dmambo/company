import { MessageCircle, Phone, Mail } from "lucide-react";
import { FaWhatsapp} from 'react-icons/fa';
// import Link from "next/link";

const UpperNav = () => {
  return (
    <div className="flex  justify-evenly text-sm text-center md:text-left bg-black text-white p-3 ">
      {/* Email */}
      <div className="flex justify-center md:justify-start gap-2 items-center hover:scale-125 transform transition duration-300 text-red-400">
        <div>
          <Mail className=" w-4 h-4" />
        </div>
        <div className=" hidden md:block">
          <a href="mailto:ibkhalidworld@gmail.com">
            <h3>ibkhalidworld@gmail.com</h3>
          </a>
        </div>
      </div>
      {/* whatsapp */}
      <div className="flex justify-center md:justify-start gap-2 items-center hover:scale-125 transform transition duration-300 text-yellow-400 hover:">
        <div>
          <FaWhatsapp className=" w-4 h-4" />
        </div>
        <div className=" hidden md:block">
          <a href="https://wa.me/918273773558">
            <h3>+918273773558</h3>
          </a>
        </div>
      </div>
      {/* Call */}
      <div className="flex justify-center md:justify-start gap-2 items-center hover:scale-125 transform transition duration-300 text-green-400">
        <div>
          <Phone className=" w-4 h-4" />
        </div>
        <div className=" hidden md:block">
          <a href="tel:+224613956391">
            <h3>+224613956391</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;
