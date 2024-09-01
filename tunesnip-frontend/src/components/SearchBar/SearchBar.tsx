import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "./SearchBar.css";
import { motion } from "framer-motion";
import { SHOW_ANIMATE, HIDE_ANIMATE } from "../../utils/motionStyles";

interface SearchBarProps {
    isDetecting: boolean
}

export function SearchBar({ isDetecting }: SearchBarProps) {
    const searchFiller = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const typed = new Typed(searchFiller.current, {
            strings: ['Search for a song...', 'Heat Waves', 'Style', 'Search here or identify a song below...'],
            typeSpeed: 50,
            backSpeed: 20,
            attr: 'placeholder',
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className="search-bar-container">
            <motion.div animate={isDetecting ? HIDE_ANIMATE : SHOW_ANIMATE}>
                <label className="input input-bordered flex items-center gap-2">
                    <input ref={searchFiller} id='typed' type="text" className="grow" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </motion.div>
        </div>
    );
}