import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import images from '../../constants/images';
import Nav from "./Nav";

const HeaderNav = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className=" grid w-[100vw] h-[100px] bg-gradient-to-br place-content-center">
                <div className="flex items-center p-16 justify-between w-[100vw] text-white">
                    <div className="flex justify-start w-auto max-w-[20vw] sm:max-w-[12vw] md:max-w-[100px]">
                        <img
                            src={images.logo}
                            alt="logo img"
                            className="object-contain w-full h-auto"
                        />
                    </div>
                 
                    <motion.button
                        whileHover={{ rotate: "180deg" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="p-4 text-3xl text-black transition-colors bg-white rounded-full hover:text-indigo-500"
                    >
                        <FiMenu />
                    </motion.button>
                </div>
            </div>
            <Nav isOpen={isOpen} setIsOpen={setIsOpen} />

        </>
    )
}

export default HeaderNav