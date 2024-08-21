import Logo from "./logo";
import { Separator } from "./ui/separator";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Example social icons
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <Separator />
            <footer className="bg-black text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center space-y-8 lg:space-y-0">
                        
                        {/* Logo */}
                        <div className="flex-none">
                            <Logo />
                        </div>
                        
                        {/* Connect with Us */}
                        <div className="space-y-4 lg:space-y-6">
                            <h3 className="text-xl font-bold mb-2">Connect with Us</h3>
                            <p className="text-gray-400">
                                <a href="mailto:ibkhalidworld@gmail.com" className="hover:underline transition duration-300 ease-in-out hover:text-gray-300" aria-label="Email us">ibkhalidworld@gmail.com</a>
                            </p>
                            <p className="text-gray-400">
                                <a href="tel:+224613956391" className="hover:underline transition duration-300 ease-in-out hover:text-gray-300" aria-label="Call us">+224613956391</a>
                            </p>
                        </div>
                        
                        {/* Links */}
                        <div className="space-y-4 lg:space-y-6">
                            <h3 className="text-xl font-bold mb-2">Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="/about" className="hover:underline transition duration-300 ease-in-out hover:text-gray-300">About Us</Link></li>
                                <li><Link href="/services" className="hover:underline transition duration-300 ease-in-out hover:text-gray-300">Services</Link></li>
                                <li><Link href="/contact" className="hover:underline transition duration-300 ease-in-out hover:text-gray-300">Contact</Link></li>
                                <li><Link href="/privacy" className="hover:underline transition duration-300 ease-in-out hover:text-gray-300">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        
                        {/* Socials */}
                        <div className="space-y-4 lg:space-y-6">
                            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FaFacebook className="text-2xl hover:text-gray-400 transition duration-300 ease-in-out" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FaTwitter className="text-2xl hover:text-gray-400 transition duration-300 ease-in-out" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin className="text-2xl hover:text-gray-400 transition duration-300 ease-in-out" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FaInstagram className="text-2xl hover:text-gray-400 transition duration-300 ease-in-out" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
