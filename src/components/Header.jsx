import React, {useState} from "react";
import NavBar from "./NavBar";
import HamburgerButton from "./HamburgerButton";
function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const handleHamburgerButton = () => {
        setIsOpen(!isOpen)
    };
    return(
        <header className="bg-slate-950 w-[75vw] min-h-[10vh] items-center p-3 flex justify-between flex-wrap">
            <div className="flex-1">
                <p className="text-base text-slate-100">My Tinerary</p>
            </div>
            <div className="md:hidden">
                <HamburgerButton onClick={handleHamburgerButton} isOpen={isOpen} />
            </div>
            <div className={`${isOpen ? 'block w-full p-3' : 'md:flex' }`}>
                <NavBar isOpen={isOpen} />
            </div>
            
            
        </header>
    )
}
export default Header