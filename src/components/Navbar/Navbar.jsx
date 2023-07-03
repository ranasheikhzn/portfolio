import { useEffect, useState } from "react";
import './Navbar.css'
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";

const Navbar = ({ activeSection }) => {
    const [open, setOpen] = useState(false)

    const [isSticky, setIsSticky] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > prevScrollPos) {
            setIsSticky(true);
        }
        else {
            setIsSticky(false)
        }
        setPrevScrollPos(currentScrollPos);
    };

    return (
        <nav className={`sticky top-0 z-20 ${isSticky ? 'bg-gradient-to-br from-[#0F2033] via-[#1B1631] to-[#0F172B] sticky-nav' : ''}`}>
            <div className="relative max-w-7xl mx-auto px-4 md:px-10 flex flex-wrap items-center justify-between w-full py-4 md:py-5 text-lg">
                <div>
                    <Link to="/" className="poppins-font text-2xl md:text-3xl font-bold text-white">RANA SHEIKH</Link>
                </div>

                <span className="cursor-pointer md:hidden text-[#6f54ef]" onClick={() => setOpen(!open)}>
                    {open ? <HiXMark size={26}></HiXMark> : <HiBars3BottomRight size={26}></HiBars3BottomRight>}
                </span>


                <div className="w-full md:flex md:items-center md:w-auto" id="menu">
                    <ul className="text-base text-gray-700 hidden md:flex md:items-center">
                        <NavItems activeSection={activeSection} />
                    </ul>

                    <div className={`w-full md:hidden overflow-hidden text-gray-700 bg-white transition-all duration-500 ${open ? "h-[250px]" : "h-0"}`}>
                        <ul className="pt-4">
                            <NavItems activeSection={activeSection} />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;