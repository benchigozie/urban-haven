import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiX } from "react-icons/hi";


function Hamburger( { isOpen, setIsOpen }) {


    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
        >
            <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div
                        key="close"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <HiX className="w-8 h-8" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <HiOutlineMenu className="w-8 h-8" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>

    )
}

export default Hamburger;